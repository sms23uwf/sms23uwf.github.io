import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectKnowledgeAreas from '../selectors/knowledgeareas';
import selectLearningObjectives from '../selectors/learningobjectives';

const handleChange = (e) => {
    console.log('handle change');
    console.log(`handleChange with ${e}`);
    console.log(e);
    checkboxChecked = !checkboxChecked;
    console.log(`checkboxChecked = ${checkboxChecked}`);
 };
  

 export const LearningObjectivesCollapsible = (props) => (
    //let strLo = `wwww`;
    <div>
    
    <Collapsible key="1" title="Arts and Literature">
        <div className="list-header">
            <div className="show-for-mobile"> </div>
            <div className="show-for-desktop"> </div>
            <div className="show-for-mobile">Learning Outcome</div>
            <div className="show-for-desktop">Learning Outcome</div>
        </div>
        <div id="lo_listbody" className="list-body">
            <span>
                <div className="list-item" key="1a"> 
                    <div className="field" width="0.10">
                        <div className="col-sm-12">
                            <input
                                name="checkbox"
                                type="checkbox"
                                onChange={handleChange}
                            />  
                        </div>
                    </div>
                    <div className="list-item" key="1aa">
                        <span className="list-item__data">Learning Objective 1</span>
                    </div>
                </div>
            </span>
            <span>
            <div className="list-item" key="1b"> 
                <div className="field" width="0.10">
                    <div className="col-sm-12">
                        <input
                            name="checkbox"
                            type="checkbox"
                            onChange={handleChange}
                        />  
                    </div>
                </div>
                <div className="list-item" key="1bb">
                    <span className="list-item__data">Learning Objective 2</span>
                </div>
            </div>
        </span>

        </div>

    </Collapsible>
    <Collapsible key="2" title="Business, Finance, and Technology">
        <div className="list-header">
            <div className="show-for-mobile"> </div>
            <div className="show-for-desktop"> </div>
            <div className="show-for-mobile">Learning Outcome</div>
            <div className="show-for-desktop">Learning Outcome</div>
        </div>
        <div id="lo_listbody" className="list-body">
            <span>
                <div className="list-item" key="2a"> 
                    <div className="field" width="0.10">
                        <div className="col-sm-12">
                            <input
                                name="checkbox"
                                type="checkbox"
                                onChange={handleChange}
                            />  
                        </div>
                    </div>
                    <div className="list-item" key="2aa">
                        <span className="list-item__data">Learning Objective 1</span>
                    </div>
                </div>
            </span>
            <span>
            <div className="list-item" key="2b"> 
                <div className="field" width="0.10">
                    <div className="col-sm-12">
                        <input
                            name="checkbox"
                            type="checkbox"
                            onChange={handleChange}
                        />  
                    </div>
                </div>
                <div className="list-item" key="2bb">
                    <span className="list-item__data">Learning Objective 2</span>
                </div>
            </div>
        </span>

        </div>

    </Collapsible>
    </div>

  );
  
  const mapStateToProps = (state) => {
    return {
      learningobjectives: selectLearningObjectives(state.learningobjectives, state.filters),
      knowledgeareas: selectKnowledgeAreas(state.knowledgeareas, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(LearningObjectivesCollapsible);