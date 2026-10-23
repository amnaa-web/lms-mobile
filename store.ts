import {create} from 'zustand';
type LearningState = {name:string|null; completed:Record<string,string[]>; scores:Record<string,number>; login:(name:string)=>void; logout:()=>void; complete:(courseId:string,lessonId:string)=>void; setScore:(courseId:string,score:number)=>void};
export const useLearning = create<LearningState>((set)=>({
 name:null,completed:{},scores:{},login:(name)=>set({name}),logout:()=>set({name:null}),
 complete:(courseId,lessonId)=>set(s=>({completed:{...s.completed,[courseId]:Array.from(new Set([...(s.completed[courseId]||[]),lessonId]))}})),
 setScore:(courseId,score)=>set(s=>({scores:{...s.scores,[courseId]:score}}))
}));
