document.addEventListener('DOMContentLoaded', function() {
    // Welcome SweetAlert
    Swal.fire({
        title: 'Welcome to My Portfolio!',
        text: 'Feel free to explore and get in touch.',
        icon: 'info',
        iconColor: '#4a90e2', // Mengubah warna ikon menjadi biru yang sesuai dengan tema
        confirmButtonText: 'Explore',
        confirmButtonColor: '#8B7355', // Warna coklat/bronze untuk tombol
        background: '#f8f9fa',
        customClass: {
            title: 'custom-swal-title',
            content: 'custom-swal-content',
        }
    });

    // Existing Learn More buttons functionality
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            const projectTitle = this.getAttribute('data-project-title');
            const projectDescription = this.getAttribute('data-project-description');
            const projectTech = this.getAttribute('data-project-tech');
            const projectLink = this.getAttribute('data-project-link');
            
            Swal.fire({
                title: projectTitle,
                html: `
                    <p>${projectDescription}</p>
                    <p><strong>Technologies used:</strong> ${projectTech}</p>
                    <p><a href="${projectLink}" target="_blank">View Project</a></p>
                `,
                icon: 'info',
                iconColor: '#4a90e2', // Menyamakan warna ikon di modal project
                confirmButtonText: 'Close',
                confirmButtonColor: '#8B7355',
                background: '#f8f9fa',
                customClass: {
                    title: 'custom-swal-title',
                    content: 'custom-swal-content',
                },
            });
        });
    });
    document.getElementById("project-link").addEventListener("input", function () {
        const link = document.getElementById("dynamic-link");
        const url = this.value;
        if (url) {
            link.href = url; // Perbarui href dengan input
            link.target = "_blank"; // Buka di tab baru
        }
    });    
    
});

