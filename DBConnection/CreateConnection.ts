import { MyResumeDto } from '../DTO/MyResumeDto';
import * as myResume from '../myresume.json';

export const createMyResumeObject = () => {
    return myResume as MyResumeDto;
}