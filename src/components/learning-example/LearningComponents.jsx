import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import DefaultNoDefault from './DefaultNoDefault';
import Defcomp from './DefaultNoDefault';
import { NotDefault, NotDefault2 } from './DefaultNoDefault';
//import { NotDefault2 } from './DefaultNoDefault';
import LearningJavaScript from './LearningJavaScript';
import React from 'react'

export default function LearningComponents() {
    return (
        <div className='App'>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <DefaultNoDefault />
            <Defcomp></Defcomp>
            <NotDefault></NotDefault>
            <NotDefault2></NotDefault2>
            <LearningJavaScript></LearningJavaScript>
        </div>
    );
}
