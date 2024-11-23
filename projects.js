document.addEventListener('DOMContentLoaded', function() {
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
                    <div style="text-align: left;">
                        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
                        <p><strong>Technologies used:</strong> ${projectTech}</p>
                        <p><a href="${projectLink}" target="_blank">View Project</a></p>
                    </div>
                `,
                icon: 'info',
                iconColor: '#4a90e2',
                confirmButtonText: 'Close',
                confirmButtonColor: '#4a90e2',
                customClass: {
                    popup: 'swal2-show-modal',
                    title: 'swal2-title',
                    htmlContainer: 'swal2-html-container',
                    confirmButton: 'swal2-confirm'
                }
            });
        });
    });
});

