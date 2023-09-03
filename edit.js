// Get the editable content container
const editableContent = document.getElementById("editableContent");

// Create an "Edit" button
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editableContent.appendChild(editButton);

// Add a click event listener to the "Edit" button
editButton.addEventListener("click", () => {
  const existingContent = editableContent.querySelector("p").textContent;
  
  // Create an input field for editing
  const editInput = document.createElement("input");
  editInput.value = existingContent;
  
  // Replace the content with the input field
  editableContent.innerHTML = '';
  editableContent.appendChild(editInput);
  
  // Create a "Save" button for saving the edited content
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  editableContent.appendChild(saveButton);
  
  // Add a click event listener to the "Save" button
  saveButton.addEventListener("click", () => {
    const newContent = editInput.value;
    
    // Replace the input field with the updated content
    const updatedParagraph = document.createElement("p");
    updatedParagraph.textContent = newContent;
    
    editableContent.innerHTML = '';
    editableContent.appendChild(updatedParagraph);
    editableContent.appendChild(editButton);
  });
});
