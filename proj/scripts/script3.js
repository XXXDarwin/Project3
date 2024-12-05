document.addEventListener('DOMContentLoaded', function() {
    const coursesList = document.querySelector('.partners-list');
    const courseItems = document.querySelectorAll('.partners-item');
    const courseWidth = courseItems[0].offsetWidth;
    const visibleCourses = 4; 
    const totalCourses = courseItems.length;
    let currentIndex = 0;

    function slideCourses(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % totalCourses;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + totalCourses) % totalCourses;
        }
        const offset = -currentIndex * courseWidth;
        coursesList.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.prev2-button').addEventListener('click', () => slideCourses('prev'));
    document.querySelector('.next2-button').addEventListener('click', () => slideCourses('next'));

    setInterval(() => slideCourses('next'), 2222); 
});