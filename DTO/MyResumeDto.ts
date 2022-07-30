import { EducationDto } from "./EducationDto";
import { EmploymentHistoryDto } from "./EmploymentHistoryDto";
import { TechnicalSkillDto } from "./TechnicalSkillDto";

export interface MyResumeDto {

    education?: (EducationDto)[] | null;
    employmentHistory?: (EmploymentHistoryDto)[] | null;
    technicalSkill?: (TechnicalSkillDto)[] | null;

      

}