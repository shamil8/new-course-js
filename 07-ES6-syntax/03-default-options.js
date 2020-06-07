const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
    // date = date || new Date().toLocaleDateString() // it's old method

    return {
        title,
        text,
        date: date,  // we can write only date
    }
}

const post = createPost('news', 'Something...')

console.log(post)
