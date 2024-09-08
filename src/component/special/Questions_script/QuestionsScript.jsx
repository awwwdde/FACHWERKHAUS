import React, {useState} from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

import plus from "../../../img/qst_plus.png";

import './questionsScript.scss';


const QuestionsScript = ({title, descr}) => {
    const [isActive, setIsActive] = useState(false);

    const reveal = () => {
        setIsActive(isActive => isActive =! isActive);
    }

    return (
        <div className="questionsSC" style={{}}>
            <div className="questionsSC_top" >
                <h2 className="questionsSC_title">{title}</h2>
                <img src={plus} alt="" style={{transform: isActive ? 'rotate(45deg)' : 'rotate(0)'}} className="questionsSC_icon" onClick={reveal}/>
            </div>
            <Transition
                
                in={isActive}
                timeout={10}
                mountOnEnter
                unmountOnExit
                
            >
                {state => <p className={`questionsSC_descr ${state}`}>
                    {descr}
                </p>}

            </Transition>
        </div>
    );
};

export default QuestionsScript;