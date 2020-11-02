import React from 'react'; 
import './DashboardHeader.css'; 

function DashboardHeader() {
    return (
        <div className="dashboardheader">
            <div className="dashboardheader__themockinterviewsplace">
                <a className="dashboardheaderthemockinterviewsplace" href="/mockinterviews">Coding Interviews</a>
            </div>

        </div>
    ); 
}

export default DashboardHeader; 