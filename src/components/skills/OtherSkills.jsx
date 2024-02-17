import React from 'react'

const OtherSkills = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Other Skills</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
             <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">DBMS</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Operating System</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>
            
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Gloud Technologies</h3>
                    <span className="skills__level">(Beginner)</span>
                </div>
            </div>

       </div>
    </div>
</div>   
  )
}

export default OtherSkills