import { EntityRepository, Repository } from "typeorm"

import { Student } from "../models/student"

@EntityRepository(Student)
export class PostRepository extends Repository<Student> { }