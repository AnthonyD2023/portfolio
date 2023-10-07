// Get reference to the text blocks in HTML
var divBlocks

function init() {
    divBlocks = [document.getElementById("TitleBlock"),
                 document.getElementById("Block1"),
                 document.getElementById("Block2"),
                 document.getElementById("Block3"),
                 document.getElementById("Block4")]

    setState(0);
}

function setState(buttonID) {
    
    // Hide all block elements
    for(let i = 1; i in divBlocks; i++) {
        if (divBlocks[i] !== null)
        divBlocks[i].style.display = "none"
    }

    switch(buttonID) {
        case 0:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Profile"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML = "I am a dedicated, inquisitive, self-motivated, responsible person who is looking for "+
            "an opportunity to contribute to a team and support Canadians by applying my business and technological skills and competencies."+
            "I am a strategic, logical, and critical thinker taking a procedural approach to problem solving and project management."
           
        break
        case 1:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Skills / Competencies"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML =
            "•	Good judgement and use a logical utility-based approach to decision making<br>"+
            "•	Do well in leadership roles and am self-motivated<br>"+
            "•	Very inclusive and works well in team environments<br>"+
            "•	Value good communication both written and verbal<br>"+
            "•	Results based in research and analysis<br>"+
            "•	Experience with Google Suite and Microsoft Office<br>"+
            "•	Programming in HTML, CSS, JS, PHP, Java, C/C++, C#, MySQL, Python<br>"+
            "•	Eclipse IDE for Java Development, Visual Studio for C, C# and C++, Visual Studio Code for HTML, CSS, JS, PHP Development, PyCharm for Python Development and MySQL Workbench for SQL<br>"+
            "•	Establishing computer networks with VMWare<br>"+
            "•	Gimp and Photoshop for image editing and graphics creation<br>"+
            "•	Financial Accounting and Business Management in a practical environment<br>"
        break
        case 2:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Achievements / Certifications"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML =
            "•	National Lifesaving – Red Cross Society (2023)<br>"+
            "•	Certificate of Endorsement in Business Studies – Glebe Collegiate Institute (2022)<br>"+
            "•	Honour Society Certificate – Glebe Collegiate Institute (2022)<br>"+
            "•	Standard First Aid with CPR “C” – Red Cross Society (2022)<br>"+
            "•	Glebe Curling Team – Glebe Collegiate Institute (2018 – 2022)<br>"+
            "•	Rookie of the Year (Pool Maintenance & Lifeguarding) – H2O (2020)<br>"+
            "•	Counselor in Training Program (with High Five Principles of Healthy Child Development) Parks and Recreation Ontario (2019)<br>"+
            "•	Salesperson Award – Junior Achievement – Glebe Collegiate Institute (2018 – 2019)<br>"+
            "•	Ottawa Regional Science Fair – Ottawa Carleton District School Board (2017)"
        break
        case 3:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Education"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML =
            "Algonquin College - Bachelor of Technology : Business Systems Development<br>"+
            "2022 - Present<br>"+
            "A 4-year bachelor program in software systems and business management including a secondary focus on digital healthcare. There are 3 co-op terms to help gain relevant experience in a professional environment.<br>"+
            "Courses Taken<br>"+
            "-	Introduction to Computer Programming (Year 1)<br>"+
            "-	Database Design Fundamentals (Year1)<br>"+
            "-	Communications and Academic Writing (Year 1)<br>"+
            "-	Mathematics for Programming (Year 1)<br>"+
            "-	Financial Accounting (Year 1)<br>"+
            "-	Programming (Year 1)<br>"+
            "-	Data Communication and Networking (Year 1)<br>"+
            "-	Introduction to the Canadian Healthcare System (Year 1)<br>"+
            "-	Logical and Critical Thinking (Year 1)<br>"+
            "-	Statistics (Year 1)<br>"
            divBlocks[2].style.display = "block"
            divBlocks[2].innerHTML = 
            "Upcoming Courses<br>"+
            "-	Mobile Application Development (Year 2)<br>"+
            "-	Internet Architecture and Web Development (Year 2)<br>"+
            "-	Advanced Database Design and SQL (Year 2)<br>"+
            "-	Managerial Accounting (Year 2)<br>"+
            "-	Technology Integration Using SAP (Year 2)<br>"+
            "-	Business Analytics and Advanced Business Intelligence (Year 2)<br>"+
            "-	Project Management for IT (Year 3)<br>"+
            "-	Enterprise Architecture (Year 3)<br>"+
            "-	Business Systems Design and Implementation (Year 3)<br>"+
            "-	Professional Option I : Data Analytics (Year 3)<br>"+
            "-	Business Technology Management (Year 3)<br>"+
            "-	Professional Option II : Wearable Computing (Year 4)<br>"+
            "-	Business System Security, Audit and Control (Year 4)<br>"+
            "-	Business Software Agents and Artificial Intelligence (Year 4)<br>"+
            "-	Entrepreneurship (Year 4)"
        break
        case 4:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Experience"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML = 
            "Cultural Interpretation Services of Ottawa Carleton (CISOC)<br>" +
            "2022 – Present<br>" +
            "   CISOC provides translation services to a variety of clients. They were looking to do a database migration. They were using Microsoft Access which has its issues with file corruption and performance and switched to the more maintained and powerful MySQL.<br>" +
            "H2O – Lifeguard and Pool Attendant.<br>" +
            "2020 – Present<br>" +
            "    H2O provides lifeguards and pool / rec center maintenance services to private residential<br>" +
            "complexes and have recently started doing lifeguard rentals.<br>" +
            "A+ Property Management (Self Employed)<br>" +
            "2018 – Present<br>" +
            "   This is my own private neighbourhood business. On the service we looked after people’s properties usually when they are away. I look after lawns (cutting grass, raking, shoveling), taking out garbage when needed, if they had a pool I would look after that, watering plants, and managing mail.<br>" +
            "   On the business side, I was responsible for managing finance and invoices, marketing to people in the neighbourhood, and supplying and maintaining equipment.<br>" +
            "Curling Instructor<br>" +
            "2018 – 2019<br>" +
            "   I curl and have since I was 12. In 2018, a manager at the curling club had organized a volunteer program for me and a few other curlers to teach people the basics of the sport. It included the physical and practical elements such as being comfortable on the ice, sweeping properly, and throwing properly as well as the strategical elements like how to communicate and how to plan out your shots.<br>" +
            "   I took away very important skills in the ability to teach. This is a very important skill that can pertain to almost any field as the approach to teaching is very important and can be useful for training employees or clients on a particular task.<br>" +
            "Old Ottawa East Community Center – Camp Counselor<br>" +
            "2019 – 2020<br>" +
            "   I was a camp counselor at an after-school program at Brantwood Park that was run through the Old Ottawa East Community Center. Through this program, I learned how to be very responsible and how to handle issues and look after children.<br>"
        break
        case 5:
            divBlocks[0].innerHTML = "Anthony Dicaire<br>Interests / Activities"
            divBlocks[1].style.display = "block"
            divBlocks[1].innerHTML = 
            "•	Technological projects such as game development, application development, and database management<br>"+
            "•	Investment management in stocks and Exchange Traded Funds<br>"+
            "•	Photography<br>"+
            "•	Physical activities including curling, swimming, biking, hiking, basketball, golf, downhill and cross-country skiing, sailing, wakeboarding, surfing, and working out in a gym<br>"+
            "•	Dogs and dog training"
        break
    }
}