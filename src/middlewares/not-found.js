function notFound(req,res){
    res.status(400).send('<h1> this route does not exist! go back <a href="/">here</a><</h1> ')
}

export default notFound