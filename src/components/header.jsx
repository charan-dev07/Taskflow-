import './header.css';

export function Header(){

    return(


<div className="header-container" >



    
<div className='header-flex'>
    <div className="left-section">
        Dashboard
    </div>
    <div className='middle-section'>
<input className='search' type="text" placeholder='search' />

    </div>
    <div className='right-section'>
        <button>
 <img className='bell-icon' src="./bell.png" alt="" />
        </button>
        <button>
            <img className='account-icon' src="./account.png" alt="" />
        </button>
        <div className='name'>
            charan
        </div>
   
    </div>
</div>
</div>



















    );










}

