const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
  ];

  let tmpLink = "";

  for (let i=0; i<books.length;i++){
    let para = document.createElement("p");
    if (books[i].alreadyRead){
      para.style.color = "green";
    }else{
      para.style.color = "red";
    }
    document.body.appendChild(para);
    let link = document.createElement("a");
    let img = document.createElement("img");
    if (books[i].title.includes("Gödel, Escher, Bach")){
      tmpLink = "https://www.researchgate.net/profile/Rasmus-Winther/publication/220608082/figure/fig11/AS:341416384450572@1458411417801/Cover-image-of-Douglas-Hofstadters-Goedel-Escher-Bach-An-Eternal-Golden-Braid-A.png";
    }else if (books[i].title.includes("Sapiens: A Brief History of Humankind")){
      tmpLink ="https://i0.wp.com/www.wrbh.org/wp-content/uploads/2018/05/Spaiens-book-cover.jpg?ssl=1";
    }else if (books[i].title.includes("A Short History of Nearly Everything")){
      tmpLink ="https://cdn.penguin.co.uk/dam-assets/books/9780241451939/9780241451939-jacket-large.jpg"
    }else if (books[i].title.includes("A Life on our Planet")){
      tmpLink ="https://cdn.penguin.co.uk/dam-assets/books/9781529108293/9781529108293-jacket-large.jpg"
    }else if (books[i].title.includes("Cosmos")){
      tmpLink ="https://kbimages1-a.akamaihd.net/362a218a-aadd-453e-a97a-5acae38c4f83/353/569/90/False/cosmos-8.jpg"
    }
    link.href = tmpLink;
    img.src= tmpLink;
    img.style.width = "100px";
    img.style.length = "120px";
    let liItem = document.createElement("li");
    liItem.innerText = books[i].title
    let liItem2 = document.createElement("li");
    liItem2.innerText = books[i].author;
    let ulItem = document.createElement("ul");
    ulItem.appendChild(liItem);
    ulItem.appendChild(liItem2);
    link.append(img);
    para.append(link);
    para.append(ulItem);
  }
    
  