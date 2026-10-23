import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useLearning} from '../data/store';
import {LoginScreen} from '../screens/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {CourseScreen} from '../screens/CourseScreen';
import {LessonScreen} from '../screens/LessonScreen';
import {QuizScreen} from '../screens/QuizScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {colors} from '../theme/styles';
export type RootParams={Tabs:undefined;Course:{courseId:string};Lesson:{courseId:string;lessonId:string};Quiz:{courseId:string}};
const Stack=createNativeStackNavigator<RootParams>();const Tabs=createBottomTabNavigator();
function MainTabs(){return <Tabs.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:colors.primary,tabBarLabelStyle:{fontWeight:'700',fontSize:12},tabBarStyle:{height:64,paddingTop:7,paddingBottom:9}}}><Tabs.Screen name="Explore" component={HomeScreen} options={{tabBarIcon:()=>null}}/><Tabs.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:()=>null}}/></Tabs.Navigator>}
export function AppNavigator(){const name=useLearning(s=>s.name);if(!name)return <LoginScreen/>;return <Stack.Navigator screenOptions={{headerShadowVisible:false,headerTintColor:colors.ink,headerStyle:{backgroundColor:colors.bg},contentStyle:{backgroundColor:colors.bg}}}><Stack.Screen name="Tabs" component={MainTabs} options={{headerShown:false}}/><Stack.Screen name="Course" component={CourseScreen} options={{title:'Course details'}}/><Stack.Screen name="Lesson" component={LessonScreen} options={{title:'Lesson'}}/><Stack.Screen name="Quiz" component={QuizScreen} options={{title:'Knowledge check'}}/></Stack.Navigator>}
