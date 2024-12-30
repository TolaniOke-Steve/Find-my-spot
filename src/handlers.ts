
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const pop_over = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')) as HTMLElement[];

    pop_over.forEach(element => {
        const pop_over_desc = new bootstrap.Popover(element, { 
            trigger: 'manual'
      });

      element.addEventListener('mouseenter',()=>{
        pop_over_desc.show();
      })

      element.addEventListener('mouseleave',()=>{
        pop_over_desc.hide();
      })
    });
});
