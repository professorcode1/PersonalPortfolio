import { Request, Response } from "express";
import { async_get_query, async_push_query } from "../utils/db";
import { college_scheduler_connection } from "../connections";
import { insert_many_hlpr } from "./utils";

async function DeleteCourse(req:Request, res:Response){
    try {
        await async_get_query("DELETE FROM course WHERE course_id = " + req.params.courseId, college_scheduler_connection);        
        return res.status(200).send();
    } catch (error) {
        console.error(error);
        return res.status(500).send();
    }
}

async function CreateCourse(req:Request, res:Response){
    try {
        let taughtBy = new Array(0),
        taughtTo = new Array(0);
        for (const key in req.body){
            if (req.body[key] === "on"){
                if (key[0] === 'P')
                    taughtBy.push(key.substring(1, key.length)); //key is of a professor
                else
                   taughtTo.push(key.substring(1, key.length)); //key is of a group
            }
        }
        taughtBy = taughtBy.map(x => Number(x));
        taughtTo = taughtTo.map(x => Number(x));
        if (taughtTo.length == 0 || taughtBy.length == 0)
        return res.redirect("/course");
        const thisCourseId = (await async_push_query("INSERT INTO course SET ?", {
        university_id: (req as any).user.university_id,
        name: req.body.courseName
        }, college_scheduler_connection)).insertId;
        await insert_many_hlpr("course_professor", thisCourseId, taughtBy, college_scheduler_connection);
        await insert_many_hlpr("course_group", thisCourseId, taughtTo, college_scheduler_connection);
        return res.status(200).send();        
    } catch (error) {
        console.error(error);
        return res.status(500).send();
    }

}

async function CourseAssetsNameList(req:Request, res:Response){
    try {
        const prof_namse = await async_get_query(`
            SELECT name FROM course_professor 
            inner join professor 
            on  course_professor.professor_id = professor.professor_id and 
            course_id = ${req.params.courseId}
        `, college_scheduler_connection);
        const group_names = await async_get_query(`
            SELECT name FROM course_group 
            inner join \`group\` 
            on  course_group.group_id= \`group\`.group_id and 
            course_id = ${req.params.courseId}
        `, college_scheduler_connection)
        return res.send({prof_namse,group_names})
    } catch (error) {
        return res.status(500).send();
    }
}

export {CreateCourse, DeleteCourse, CourseAssetsNameList}