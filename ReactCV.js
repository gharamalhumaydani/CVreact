const react1 = document.getElementById("root");

const element = <div>
    <header>
		<div  className="container">
			<div className="header-brand">
                <h1>Gharam Butayhan Alhumaydani</h1>
                <h4>Front-End Web Developer</h4>
                <ul className="contact-my">
                    <li><li>Email:</li><a href=" gh.alhumaydani@gmail.com "></a> gh.alhumaydani@gmail.com </li>
                    <li><li>Phone:</li> 0580985371 </li>
                    <li><li>Address:</li>Riyadh, Saudi Arabia </li>
                    <li><li>Linkedin:</li><a href=" gharam-alhumaydani"></a>gharam-alhumaydani</li>
                    <li><li>Github:</li><a href="gharamalhumaydani"></a>gharamalhumaydani</li>
                </ul>
			</div>
		</div>
	</header>

 <hr/>

	<main>
		<div className="container">
				<h3>Summary</h3>
                <p>
                    Computer science graduate. I am looking for a technical job, working hard and ambitious and interested in quality and<br/>
                    development in computer science and ready for any development of your company to give strength ,organization and<br/>
                    quality to achieve the company's goals.
                </p>

            <hr/>

            
				<h3>Education</h3>
                <p><b>Al Qussaim university</b>Bachelor degree</p>
				<ul className="item-list">
                   <li><b>specialization:</b>Computer Science</li>
                   <li><b>Cumulative GPA:</b>4.59/5.00</li>
                   <li><b> Gradation Year:</b>2022</li>
				</ul>
			

            <hr/>

            
               <h3>Training</h3>
			    <ul className="training">
                    <li> Summer training with SADIA Academy in a program AI Summer Champions.</li>
                    <li> Summer training with smart methods, artificial intelligence track.</li>
                </ul>	
			

            <hr/>

           
                <h3>Courses & Certifications</h3>
				<ol className="certifications">
                    <li> JavaScript Boot Camp</li>
                    <li> AI Foundation for Everyone(IBM)</li>       
				</ol>
			

            <hr/>

            
				<h3>Skills</h3>

                <h4><u>Technical Tools</u></h4>

                <p>HTML,CSS,JAVASCRIPT ,PYTHON,SQL,Search algorithms in AI,Git , GitHub,Bootstrap</p>

                <h4><u>Document Editors</u></h4>

                <p>Microsoft Excel & Word ,Google Scholar , Docs</p>

                <h4><u>Design Tools</u></h4>

                <p>Canva program</p>

                <h4><u>Soft Skills</u></h4>

                <p>Work with team , Problem-solving ,Communicate , Flexibility, Responsibility , Time management, Attention to Detail</p>
			

            <hr/>

            
                <h3>Languages</h3>
				<ol className="languages">
                    <li>Arabic</li>
                    <li>English</li>       
				</ol>
			
             
             <hr/>

             
               <h3>Project</h3>
			    <ul className="project">
                    <li>Web for waste exchange and recycling system for Unaizah city.(with group)</li>
                    <li>Web for Teaching Arabic to non-native speakers</li>
                    <li>Weather api app</li>
                    <li>Calculator app</li>
                </ul>	
			
		</div>
	</main>
</div>;

ReactDOM.render(element,react1);
