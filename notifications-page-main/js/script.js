"use strict";



    /**
     * on click on button its gonna change functionality of button
     *
     * na kliknutie chceme vymazať stary obsah a pridat novy
     * 
     *
     * 
     * 
     * 
     */
let button = $(".item a");



button.click(function(){
    event.preventDefault()
    $(this).closest(button).css('background-color','#C73A0F')
    $(this).closest(button).html("")
    let addtext = $(this).html("<p>1</p>")
    let buttonContainer = `
        <div style='display: flex; align-items: center; justify-content: space-between; width: 100%;'>
            <p class="value" style='flex-grow: 1; text-align: center;color:black; margin: 0;'>1</p>
            <button class="plus" style='border-radius: 50%;'>+</button>
        </div>
    
    `;

    
    // Nahradí obsah odkazu kontajnerom s tlačidlami
    $(this).html(buttonContainer);
    $(this).append(addtext)

});


 $(this).find('.plus').click(function() {
        let valueElement = $(this).siblings('.value');
        let currentValue = parseInt(valueElement.text());
        valueElement.text(currentValue + 1);
    });

