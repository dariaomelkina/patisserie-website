import React from "react";
import dog1 from '../../../../images/dog1.png';
import dog2 from '../../../../images/dog2.png';
import dog3 from '../../../../images/dog3.png';

const CrewCards = () => {
    return (
        <section id="ionf8u" className="bdg-sect">
            <div id="itoko2" className="container-width">
                <h1 id="ieqedf" className="bdg-title">Our crew
                </h1>
                <div id="imcy2r" className="badges">
                    <div className="badge">
                        <div id="i1cd98" className="badge-header">
                        </div>
                        <img src={dog1} id="ijbhea" className="badge-avatar" alt="Dog"/>
                        <div className="badge-body">
                            <div id="iddnd6" className="badge-name">Daria
                            </div>
                            <div id="iricwf" className="badge-role">Web pâtissier
                                <br/>
                            </div>
                        </div>
                        <div id="ixopyh" className="badge-foot">
                            <span id="i0x1ki" className="badge-link">✉</span>
                        </div>
                    </div>
                    <div className="badge">
                        <div id="issnxt" className="badge-header">
                        </div>
                        <img src={dog2} id="ih5rwl" className="badge-avatar" alt="Dog"/>
                        <div className="badge-body">
                            <div id="ii0jw1" className="badge-name">Nataliia
                            </div>
                            <div id="ijsadg" className="badge-role">Web pâtissier
                            </div>
                        </div>
                        <div id="irreas" className="badge-foot">
                            <span id="i6z90y" className="badge-link">✉</span>
                        </div>
                    </div>
                    <div className="badge">
                        <div id="id0bdx" className="badge-header">
                        </div>
                        <img src={dog3} id="ieade9" className="badge-avatar" alt="Dog"/>
                        <div className="badge-body">
                            <div id="imxvoz" className="badge-name">Zoryana
                            </div>
                            <div id="i6cwjh" className="badge-role">Web pâtissier
                            </div>
                        </div>
                        <div id="i8piox" className="badge-foot">
                            <span id="iozmql" className="badge-link">✉</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrewCards;