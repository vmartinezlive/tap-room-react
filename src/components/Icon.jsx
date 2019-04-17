import React from 'react';


function Icon(){
  return (
    <div>
      <style jsx>{`
					div{
						display: flex;
						justfy-content: space-around;
						position: absolute;
						right 10px;
					}
					i {
						padding-right: 5px;
						padding-left: 5px;
					}
			`}</style>
      <i className="fab fa-facebook-f fa-3x"></i>
      <i className="fab fa-instagram fa-3x"></i>
    </div>
  );
}

export default Icon;
