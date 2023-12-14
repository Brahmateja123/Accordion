document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.getElementById("accordion-container");
    const addButton = document.getElementById("add-button");
  
    addButton.addEventListener("click", function () {
      const section = createAccordionSection();
      accordionContainer.appendChild(section);
    });
  
    function createAccordionSection() {
      const section = document.createElement("div");
      section.classList.add("accordion-section");
  
      const title = document.createElement("div");
      title.classList.add("accordion-title");
      title.textContent = "New Title";
      title.contentEditable = true;
  
      const description = document.createElement("div");
      description.classList.add("accordion-description");
      description.textContent = "New Description";
      description.contentEditable = true;
  
      section.appendChild(title);
      section.appendChild(description);
  
      return section;
    }
  });
  
  