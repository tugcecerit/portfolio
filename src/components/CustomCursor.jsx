import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    const linkElements = document.querySelectorAll('.link, .cards-cta');
    linkElements.forEach(function(element) {
      element.addEventListener('mouseenter', function() {
        cursor.classList.add('scale-up');
      });

      element.addEventListener('mouseleave', function() {
        cursor.classList.remove('scale-up');
      });
    });

    return () => {
      document.body.removeChild(cursor);
      linkElements.forEach(function(element) {
        element.removeEventListener('mouseenter', function() {
          cursor.classList.add('scale-up');
        });

        element.removeEventListener('mouseleave', function() {
          cursor.classList.remove('scale-up');
        });
      });
    };
  }, []);

  return null;
};

export default CustomCursor;
