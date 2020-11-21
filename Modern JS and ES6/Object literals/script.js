/* -------------------------------------------------------------------------- */
/*                         Object Literal Enhancements                        */
/* -------------------------------------------------------------------------- */

// When the property name is the same as the variable name, we can raduce this..

var name = 'SHOTA';
var surname = 'Borcvadze';

var fullName = {
    name,
    surname
};

console.log(fullName); // {name: "SHOTA", surname: "Borcvadze"}
console.log(fullName.name); // SHOTA
console.log(fullName.surname); // Borcvadze




/* -------------------------------------------------------------------------- */
/*                               Object Literals                              */
/* -------------------------------------------------------------------------- */

let user = {
    // properties
    name: 'crystal',
    age: 30,
    email: 'shano@gmail.com',
    location: 'London',
    blogs: [{
            title: 'We are humans',
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae ea distinctio eum labore facere deserunt rem quae sint et. Numquam atque dolores ducimus minus possimus hic saepe reprehenderit vero dolorum, amet fugit libero eius enim quisquam fuga itaque quibusdam, facilis adipisci magni accusamus? Quaerat voluptate quam magni praesentium accusamus. Accusantium illo obcaecati eos soluta inventore!',
            score: 30
        },
        {
            title: 'Why did they do this?',
            content: 'eum labore facere deserunt rem quae sint et. Numquam atque dolores ducimus minus possimus hic saepe reprehenderit vero dolorum',
            score: 567
        }
    ],
    // methods - writting rule: 1. Cannot be used Arrow Functions!
    login: function () {
        console.log('You are logged in');
    },
    logout: function () {
        console.log('You are logged out');
    },
    // methods - writting rule: 2
    publish_post() {
        console.log('post is Published');
    },
    // this keyword
    logBlogs() {
        console.log('This person has 2 blogs:');
        this.blogs.forEach((blog) => {
            console.log(blog.title, blog.content, blog.score);
        });
    }
};

console.log(user.name);
user.login();
user.publish_post();
user.logBlogs();


/* -------------------------------------------------------------------------- */
/*                        How store data from Database                        */
/* -------------------------------------------------------------------------- */
// first, we must make an array. And in this arry we make objects. 

const blogs = [{
        title: 'We are humans',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae ea distinctio eum labore facere deserunt rem quae sint et. Numquam atque dolores ducimus minus possimus hic saepe reprehenderit vero dolorum, amet fugit libero eius enim quisquam fuga itaque quibusdam, facilis adipisci magni accusamus? Quaerat voluptate quam magni praesentium accusamus. Accusantium illo obcaecati eos soluta inventore!',
        score: 30
    },
    {
        title: 'Why did they do this?',
        content: 'eum labore facere deserunt rem quae sint et. Numquam atque dolores ducimus minus possimus hic saepe reprehenderit vero dolorum',
        score: 567
    }
];