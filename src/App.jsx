// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutJava from "./components/aboutJava";
import Foundations from "./topics/foundations";
import MethodsAndProgramStructure from "./topics/methodsAndProgramStructure";
import ObjectOrientedProgrammingCore from "./topics/objectOrientedProgrammingCore";
import MemoryJvmMentalModel from "./topics/memoryJvmMentalModel";
import StringsAndArrays from "./topics/stringsAndArrays";
import ExceptionHandling from "./topics/exceptionHandling";
import CollectionsFramework from "./topics/collectionsFramework";
import Generics from "./topics/generics";
import Java8AndBeyond from "./topics/java8AndBeyond";
import DateAndTimeApi from "./topics/dateAndTimeApi";
import FileHandling from "./topics/fileHandling";
import MultithreadingBasics from "./topics/multithreadingBasics";
import ConcurrencyEssentials from "./topics/concurrencyEssentials";
import ModulesAndPackaging from "./topics/modulesAndPackaging";
import BestPracticesInterviewTraps from "./topics/bestPracticesInterviewTraps";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutJava />

                    <Foundations />
                    <MethodsAndProgramStructure />
                    <ObjectOrientedProgrammingCore />
                    <MemoryJvmMentalModel />
                    <StringsAndArrays />
                    <ExceptionHandling />
                    <CollectionsFramework />
                    <Generics />
                    <Java8AndBeyond />
                    <DateAndTimeApi />
                    <FileHandling />
                    <MultithreadingBasics />
                    <ConcurrencyEssentials />
                    <ModulesAndPackaging />
                    <BestPracticesInterviewTraps />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
