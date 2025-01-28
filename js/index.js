document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        const increment = target / 200; // Adjust speed by changing 200
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target; // Ensure it ends exactly at the target
        }
      };
  
      updateCount();
    });
  });
  