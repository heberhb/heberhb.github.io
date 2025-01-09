        document.getElementById('startCapture').addEventListener('click', async () => {
            try {
                // Solicita permissão para capturar a tela
                const mediaStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true, // Captura apenas o vídeo
                    audio: false // Sem áudio
                });

                // Obtém o elemento <video>
                const videoElement = document.getElementById('screenVideo');
                // Obtém o elemento <video>
                const videoElement1 = document.getElementById('screenVideo1');

                // Define o fluxo de mídia no <video>
                videoElement.srcObject = mediaStream;
                // Define o fluxo de mídia no <video>
                videoElement1.srcObject = mediaStream;
            } catch (err) {
                console.error('Erro ao capturar a tela:', err);
            }
        });

        document.getElementById('screenVideo').addEventListener('click', (event) => {
            // Para encerrar a captura quando o stream for interrompido
                    mediaStream.getVideoTracks()[0].addEventListener('ended', () => {
                    alert('Captura de tela encerrada.');
            })
        console.log('Clique detectado no screenVideo');
    });       