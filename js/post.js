// Post
date = new Date();
let post = [{
        title: 'Prueba 1',
        date: 'Publicado el día ' + date.getDay() + ' del mes ' + date.getMonth() + ' del año ' + date.getFullYear(),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic mollitia at eius quidem expedita ipsa architecto quasi magni dolorem voluptatibus, perferendis temporibus libero laborum culpa a nemo iure molestiae? Saepe tempora, fuga consequuntur rerum dicta harum quaerat in ab assumenda, unde, officiis quae quos minima perspiciatis? Aliquam asperiores dolor numquam voluptates deserunt, excepturi harum, a quidem eveniet consequuntur atque! Iusto voluptatem placeat illum obcaecati neque dolores, vero nulla sint, ea cumque corrupti fuga quae culpa esse consectetur nihil facilis. Aperiam aliquam unde voluptates aut.'
    },
    {
        title: 'Prueba 2',
        date: 'Publicado el día ' + date.getDay() + ' del mes ' + date.getMonth() + ' del año ' + date.getFullYear(),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic mollitia at eius quidem expedita ipsa architecto quasi magni dolorem voluptatibus, perferendis temporibus libero laborum culpa a nemo iure molestiae? Saepe tempora, fuga consequuntur rerum dicta harum quaerat in ab assumenda, unde, officiis quae quos minima perspiciatis? Aliquam asperiores dolor numquam voluptates deserunt, excepturi harum, a quidem eveniet consequuntur atque! Iusto voluptatem placeat illum obcaecati neque dolores, vero nulla sint, ea cumque corrupti fuga quae culpa esse consectetur nihil facilis. Aperiam aliquam unde voluptates aut.'
    },
    {
        title: 'Prueba 3',
        date: 'Publicado el día ' + date.getDay() + ' del mes ' + date.getMonth() + ' del año ' + date.getFullYear(),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic mollitia at eius quidem expedita ipsa architecto quasi magni dolorem voluptatibus, perferendis temporibus libero laborum culpa a nemo iure molestiae? Saepe tempora, fuga consequuntur rerum dicta harum quaerat in ab assumenda, unde, officiis quae quos minima perspiciatis? Aliquam asperiores dolor numquam voluptates deserunt, excepturi harum, a quidem eveniet consequuntur atque! Iusto voluptatem placeat illum obcaecati neque dolores, vero nulla sint, ea cumque corrupti fuga quae culpa esse consectetur nihil facilis. Aperiam aliquam unde voluptates aut.'
    },
    {
        title: 'Prueba 4',
        date: 'Publicado el día ' + date.getDay() + ' del mes ' + date.getMonth() + ' del año ' + date.getFullYear(),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic mollitia at eius quidem expedita ipsa architecto quasi magni dolorem voluptatibus, perferendis temporibus libero laborum culpa a nemo iure molestiae? Saepe tempora, fuga consequuntur rerum dicta harum quaerat in ab assumenda, unde, officiis quae quos minima perspiciatis? Aliquam asperiores dolor numquam voluptates deserunt, excepturi harum, a quidem eveniet consequuntur atque! Iusto voluptatem placeat illum obcaecati neque dolores, vero nulla sint, ea cumque corrupti fuga quae culpa esse consectetur nihil facilis. Aperiam aliquam unde voluptates aut.'
    },
    {
        title: 'Prueba 5',
        date: 'Publicado el día ' + date.getDay() + ' del mes ' + date.getMonth() + ' del año ' + date.getFullYear(),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic mollitia at eius quidem expedita ipsa architecto quasi magni dolorem voluptatibus, perferendis temporibus libero laborum culpa a nemo iure molestiae? Saepe tempora, fuga consequuntur rerum dicta harum quaerat in ab assumenda, unde, officiis quae quos minima perspiciatis? Aliquam asperiores dolor numquam voluptates deserunt, excepturi harum, a quidem eveniet consequuntur atque! Iusto voluptatem placeat illum obcaecati neque dolores, vero nulla sint, ea cumque corrupti fuga quae culpa esse consectetur nihil facilis. Aperiam aliquam unde voluptates aut.'
    }
];

// Listado de post
post.forEach((i, v) => {
    let r = `
        <article class="post">
            <h2>${i.title}</h2>
            <span class="date">${i.date}</span>
            <p>${i.content}</p>
            <a href="#" class="btn">Leer más</a>
        </article>
    `
    $('#posts').append(r);
});