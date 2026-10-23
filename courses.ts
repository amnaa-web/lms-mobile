export type Lesson = {id:string;title:string;kind:'video'|'text';duration:string;body:string;videoUrl?:string};
export type Course = {id:string;title:string;category:string;description:string;accent:string;lessons:Lesson[];questions:{prompt:string;options:string[];answer:number}[]};
export const courses:Course[] = [
 {id:'rn',title:'React Native Essentials',category:'Development',description:'Build beautiful cross-platform apps with confidence.',accent:'#6659E8',lessons:[
   {id:'rn1',title:'Welcome to React Native',kind:'video',duration:'06:20',body:'React Native lets you build iOS and Android applications with JavaScript and React.'},
   {id:'rn2',title:'Components and Props',kind:'text',duration:'8 min read',body:'Components are reusable UI building blocks. Props allow you to pass data into them. Keep each component small and focused.'},
   {id:'rn3',title:'Styling with Flexbox',kind:'video',duration:'09:45',body:'Flexbox makes layouts responsive across different screen sizes.'}],
   questions:[{prompt:'Which language can you use with React Native?',options:['TypeScript','SQL only','PHP only'],answer:0},{prompt:'What is a React component?',options:['A database','A reusable UI element','An image file'],answer:1}]},
 {id:'ux',title:'UI/UX Design Basics',category:'Design',description:'Learn intuitive interfaces, layout and visual hierarchy.',accent:'#EBA45F',lessons:[
   {id:'ux1',title:'Design Principles',kind:'text',duration:'7 min read',body:'Visual hierarchy guides attention. Contrast, spacing, alignment and consistency make interfaces easier to use.'},
   {id:'ux2',title:'Better Mobile Layouts',kind:'video',duration:'05:15',body:'Start with content and user tasks before adding decoration.'}],
   questions:[{prompt:'Which principle directs attention?',options:['Visual hierarchy','Random spacing','Tiny text'],answer:0}]},
 {id:'data',title:'Data Literacy 101',category:'Business',description:'Understand data, dashboards and useful insights.',accent:'#43A69E',lessons:[
   {id:'d1',title:'Reading Data',kind:'text',duration:'6 min read',body:'Begin with the question. Check sources and understand what each metric measures.'}],
   questions:[{prompt:'What should you do before interpreting a chart?',options:['Ignore axes','Check units and sources','Assume causation'],answer:1}]}
];
