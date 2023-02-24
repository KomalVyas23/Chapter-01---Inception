 /* 
       const heading = document.createElement("h1");
        heading.innerHTML = "Namaste everyone from JS!";
        document.getElementById("root").appendChild(heading);*/

        const heading1 = React.createElement("h1",{
            id:'heading1'
        },"Heading 1!");

        const heading2 = React.createElement("h2",{
            id:'heading2'
        }, 'Heading 2!');

        const container = React.createElement("div",{
            className: 'conatiner'
        }, [heading1, heading2]);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(container);