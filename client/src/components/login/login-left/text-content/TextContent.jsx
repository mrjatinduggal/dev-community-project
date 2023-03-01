import "./text-content.css";

function TextContent(props) {
  const title = props.check;

  const obj = {
    Javascript:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",

    Python:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",

    Go: "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",

    Java: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",

    PHP: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group.",

    C: "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.",

    MongoDB:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.",

    Git: "Git is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",

    Kotlin:
      "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",

    Swift:
      "Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community.",

    R: "R is a programming language for statistical computing and graphics supported by the R Core Team and the R Foundation for Statistical Computing.",

    Ruby: "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types.",

    Typescript:
      "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",

    Scala:
      "Scala is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java.",

    Mongoose:
      "Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.",

    GitHub:
      "GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",

    SQL: "Structured Query Language, abbreviated as SQL, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",

    HTML: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",

    CSS: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",

    NoSQL:
      "A NoSQL (originally referring to non-SQL or non-relational) database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.",

    Rust: "Rust is a multi-paradigm, high-level, general-purpose programming language. Rust emphasizes performance, type safety, and concurrency.",

    React:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",

    AWS: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Often times, clients will use this in combination with autoscaling.",

    jQuery:
      "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of Aug 2022, jQuery is used by 77% of the 10 million most popular websites.",

    Bootstrap:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",

    CommandLine:
      "A command-line interpreter or command-line processor uses a command-line interface to receive commands from a user in the form of lines of text. This provides a means of setting parameters for the environment, invoking executables and providing information to them as to what actions they are to perform.",

    Node: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",

    Express:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",

    APIs: "An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.",

    EJS: "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.",

    Angular:
      "Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",

    Julia:
      "Julia is a high-level, dynamic programming language. Its features are well suited for numerical analysis and computational science. Distinctive aspects of Julia's design include a type system with parametric polymorphism in a dynamic programming language; with multiple dispatch as its core programming paradigm.",
  };

  if (props.check === "") {
    return (
      <div className="headings">
        <h1 className="content">World's Fastest Growing Community</h1>
        <h2 className="content">100k+ Members</h2>
        <h2 className="content">24/7 Support</h2>
        <h3 className="content mb-5">Millions have done, now its your turn.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="content">"{title}"</h1>
        <h5 className="text">{obj[title]}</h5>
      </div>
    );
  }
}

export default TextContent;
