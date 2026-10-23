import React from 'react';
import {Pressable,StyleSheet,Text,View} from 'react-native';
import {colors} from '../theme/styles';
export function Title({children,subtitle}:{children:React.ReactNode;subtitle?:string}){return <View style={{marginBottom:22}}><Text style={s.title}>{children}</Text>{subtitle?<Text style={s.sub}>{subtitle}</Text>:null}</View>}
export function Button({title,onPress,secondary=false,disabled=false}:{title:string;onPress:()=>void;secondary?:boolean;disabled?:boolean}){return <Pressable disabled={disabled} onPress={onPress} style={[s.btn,secondary&&s.secondary,disabled&&{opacity:.5}]}><Text style={[s.btnText,secondary&&{color:colors.primary}]}>{title}</Text></Pressable>}
export function Surface({children}:{children:React.ReactNode}){return <View style={s.surface}>{children}</View>}
export const s=StyleSheet.create({title:{color:colors.ink,fontSize:29,fontWeight:'800'},sub:{fontSize:14,color:colors.muted,marginTop:7,lineHeight:21},btn:{backgroundColor:colors.primary,padding:15,borderRadius:13,alignItems:'center',marginTop:12},secondary:{backgroundColor:'#EEECFF'},btnText:{color:'#fff',fontSize:15,fontWeight:'700'},surface:{backgroundColor:colors.white,borderWidth:1,borderColor:colors.line,borderRadius:18,padding:18,marginBottom:14}});
