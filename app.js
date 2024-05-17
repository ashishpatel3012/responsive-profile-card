(function () {
  const customerImg = document.querySelector("#customer-img");
  const customerName = document.querySelector(".customer-name");
  const customerText = document.querySelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  function createCustomer(img, name, text) {
    let Img = `./img/${img}.jpg`  
    
    let customer = new Customer(Img, name, text);

    customers.push(customer);
  }
  createCustomer(
    0,
    "captain america",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt? Magnam, iusto optio. Adipisci facere exercitationem excepturi officiis fugit necessitatibus?"
  );

  createCustomer(
    1,
    "Hulk",
    " dolor sit amet consectetur adipisicing elit. Totam fugiat explicabo labore molestiae facere voluptas officiis. Ipsa quae, ducimus sequi voluptate porro fugiat molestias architecto."
  );

  createCustomer(
    2,
    "Loki",
    " Eligendi quae ut reiciendis sunt repudiandae blanditiis odit placeat tempora sequi, facere eum fuga dolorem, nostrum enim dignissimos incidunt, ipsam"
  );

  createCustomer(
    3,
    "Thor",
    "corporis voluptas nihil minus! Totam alias atque est obcaecati consequuntur quam quisquam reiciendis odit deserunt sequi, molestiae nostrum amet, asperiores"
  );

  createCustomer(
    4,
    "Black-widow",
    "porro ducimus, dolor nemo quaerat facere odio? Eligendi quae ut reiciendis sunt repudiandae blanditiis odit placeat tempora sequi, facere eum fuga dolorem, nostrum enim dignissimos incidunt, ipsam corporis voluptas nihil minus! Totam alias atque est obcaecati consequuntur quam quisquam reiciendis odit deserunt sequi"
  );

  btn.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--
        customerImg.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
      if (e.target.parentElement.classList.contains("nextBtn")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }

        customerImg.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
    });
  });
})();
