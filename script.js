/**
 * Base de données des icônes Font Awesome
 * Cette collection contient plus de 100 icônes populaires de Font Awesome
 * Chaque icône est définie avec les propriétés suivantes:
 * - name: Nom descriptif de l'icône
 * - class: Classe CSS complète de l'icône (préfixe + nom)
 * - type: Type d'icône ('fab' pour les marques, 'fas' pour les icônes solides)
 * - usage: Code HTML pour utiliser l'icône
 * - color: Couleur par défaut associée à l'icône (codes hexadécimaux)
 */
const popularIcons = [
    // ===== ICÔNES DE MARQUES (fab) =====
    // Réseaux sociaux populaires
    { name: 'Instagram', class: 'fab fa-instagram', type: 'fab', usage: '<i class="fab fa-instagram"></i>', color: '#E1306C' },
    { name: 'Facebook', class: 'fab fa-facebook', type: 'fab', usage: '<i class="fab fa-facebook"></i>', color: '#1877F2' },
    { name: 'Facebook Square', class: 'fab fa-facebook-square', type: 'fab', usage: '<i class="fab fa-facebook-square"></i>', color: '#1877F2' },
    { name: 'Twitter', class: 'fab fa-twitter', type: 'fab', usage: '<i class="fab fa-twitter"></i>', color: '#1DA1F2' },
    { name: 'Twitter Square', class: 'fab fa-twitter-square', type: 'fab', usage: '<i class="fab fa-twitter-square"></i>', color: '#1DA1F2' },
    { name: 'LinkedIn', class: 'fab fa-linkedin', type: 'fab', usage: '<i class="fab fa-linkedin"></i>', color: '#0A66C2' },
    { name: 'LinkedIn In', class: 'fab fa-linkedin-in', type: 'fab', usage: '<i class="fab fa-linkedin-in"></i>', color: '#0A66C2' },
    { name: 'YouTube', class: 'fab fa-youtube', type: 'fab', usage: '<i class="fab fa-youtube"></i>', color: '#FF0000' },
    { name: 'YouTube Square', class: 'fab fa-youtube-square', type: 'fab', usage: '<i class="fab fa-youtube-square"></i>', color: '#FF0000' },
    { name: 'WhatsApp', class: 'fab fa-whatsapp', type: 'fab', usage: '<i class="fab fa-whatsapp"></i>', color: '#25D366' },
    { name: 'WhatsApp Square', class: 'fab fa-whatsapp-square', type: 'fab', usage: '<i class="fab fa-whatsapp-square"></i>', color: '#25D366' },
    { name: 'Telegram', class: 'fab fa-telegram', type: 'fab', usage: '<i class="fab fa-telegram"></i>', color: '#0088cc' },
    { name: 'Telegram Plane', class: 'fab fa-telegram-plane', type: 'fab', usage: '<i class="fab fa-telegram-plane"></i>', color: '#0088cc' },
    { name: 'Pinterest', class: 'fab fa-pinterest', type: 'fab', usage: '<i class="fab fa-pinterest"></i>', color: '#E60023' },
    { name: 'Pinterest P', class: 'fab fa-pinterest-p', type: 'fab', usage: '<i class="fab fa-pinterest-p"></i>', color: '#E60023' },
    { name: 'Pinterest Square', class: 'fab fa-pinterest-square', type: 'fab', usage: '<i class="fab fa-pinterest-square"></i>', color: '#E60023' },
    { name: 'TikTok', class: 'fab fa-tiktok', type: 'fab', usage: '<i class="fab fa-tiktok"></i>', color: '#000000' },
    { name: 'Snapchat', class: 'fab fa-snapchat', type: 'fab', usage: '<i class="fab fa-snapchat"></i>', color: '#FFFC00' },
    { name: 'Snapchat Ghost', class: 'fab fa-snapchat-ghost', type: 'fab', usage: '<i class="fab fa-snapchat-ghost"></i>', color: '#FFFC00' },
    { name: 'Snapchat Square', class: 'fab fa-snapchat-square', type: 'fab', usage: '<i class="fab fa-snapchat-square"></i>', color: '#FFFC00' },
    { name: 'Reddit', class: 'fab fa-reddit', type: 'fab', usage: '<i class="fab fa-reddit"></i>', color: '#FF4500' },
    { name: 'Reddit Alien', class: 'fab fa-reddit-alien', type: 'fab', usage: '<i class="fab fa-reddit-alien"></i>', color: '#FF4500' },
    { name: 'Reddit Square', class: 'fab fa-reddit-square', type: 'fab', usage: '<i class="fab fa-reddit-square"></i>', color: '#FF4500' },
    { name: 'Tumblr', class: 'fab fa-tumblr', type: 'fab', usage: '<i class="fab fa-tumblr"></i>', color: '#36465D' },
    { name: 'Tumblr Square', class: 'fab fa-tumblr-square', type: 'fab', usage: '<i class="fab fa-tumblr-square"></i>', color: '#36465D' },
    
    // Plateformes de streaming et médias
    { name: 'Twitch', class: 'fab fa-twitch', type: 'fab', usage: '<i class="fab fa-twitch"></i>', color: '#9146FF' },
    { name: 'Spotify', class: 'fab fa-spotify', type: 'fab', usage: '<i class="fab fa-spotify"></i>', color: '#1DB954' },
    { name: 'SoundCloud', class: 'fab fa-soundcloud', type: 'fab', usage: '<i class="fab fa-soundcloud"></i>', color: '#FF3300' },
    { name: 'Apple', class: 'fab fa-apple', type: 'fab', usage: '<i class="fab fa-apple"></i>', color: '#A2AAAD' },
    { name: 'iTunes', class: 'fab fa-itunes', type: 'fab', usage: '<i class="fab fa-itunes"></i>', color: '#FB2BC8' },
    { name: 'Apple Music', class: 'fab fa-apple-music', type: 'fab', usage: '<i class="fab fa-apple-music"></i>', color: '#FB2BC8' },
    { name: 'Deezer', class: 'fab fa-deezer', type: 'fab', usage: '<i class="fab fa-deezer"></i>', color: '#FEAA2D' },
    { name: 'Amazon', class: 'fab fa-amazon', type: 'fab', usage: '<i class="fab fa-amazon"></i>', color: '#FF9900' },
    { name: 'Netflix', class: 'fab fa-netflix', type: 'fab', usage: '<i class="fab fa-netflix"></i>', color: '#E50914' },
    { name: 'Vimeo', class: 'fab fa-vimeo', type: 'fab', usage: '<i class="fab fa-vimeo"></i>', color: '#1AB7EA' },
    { name: 'Vimeo V', class: 'fab fa-vimeo-v', type: 'fab', usage: '<i class="fab fa-vimeo-v"></i>', color: '#1AB7EA' },
    { name: 'Vimeo Square', class: 'fab fa-vimeo-square', type: 'fab', usage: '<i class="fab fa-vimeo-square"></i>', color: '#1AB7EA' },
    
    // Plateformes de développement et technologie
    { name: 'GitHub', class: 'fab fa-github', type: 'fab', usage: '<i class="fab fa-github"></i>', color: '#333333' },
    { name: 'GitHub Alt', class: 'fab fa-github-alt', type: 'fab', usage: '<i class="fab fa-github-alt"></i>', color: '#333333' },
    { name: 'GitHub Square', class: 'fab fa-github-square', type: 'fab', usage: '<i class="fab fa-github-square"></i>', color: '#333333' },
    { name: 'GitLab', class: 'fab fa-gitlab', type: 'fab', usage: '<i class="fab fa-gitlab"></i>', color: '#FCA121' },
    { name: 'Bitbucket', class: 'fab fa-bitbucket', type: 'fab', usage: '<i class="fab fa-bitbucket"></i>', color: '#0052CC' },
    { name: 'Stack Overflow', class: 'fab fa-stack-overflow', type: 'fab', usage: '<i class="fab fa-stack-overflow"></i>', color: '#F48024' },
    { name: 'NPM', class: 'fab fa-npm', type: 'fab', usage: '<i class="fab fa-npm"></i>', color: '#CB3837' },
    { name: 'Node.js', class: 'fab fa-node', type: 'fab', usage: '<i class="fab fa-node"></i>', color: '#339933' },
    { name: 'Node.js JS', class: 'fab fa-node-js', type: 'fab', usage: '<i class="fab fa-node-js"></i>', color: '#339933' },
    { name: 'PHP', class: 'fab fa-php', type: 'fab', usage: '<i class="fab fa-php"></i>', color: '#777BB4' },
    { name: 'HTML5', class: 'fab fa-html5', type: 'fab', usage: '<i class="fab fa-html5"></i>', color: '#E34F26' },
    { name: 'CSS3', class: 'fab fa-css3', type: 'fab', usage: '<i class="fab fa-css3"></i>', color: '#1572B6' },
    { name: 'CSS3 Alt', class: 'fab fa-css3-alt', type: 'fab', usage: '<i class="fab fa-css3-alt"></i>', color: '#1572B6' },
    { name: 'JavaScript', class: 'fab fa-js', type: 'fab', usage: '<i class="fab fa-js"></i>', color: '#F7DF1E' },
    { name: 'JavaScript Square', class: 'fab fa-js-square', type: 'fab', usage: '<i class="fab fa-js-square"></i>', color: '#F7DF1E' },
    { name: 'React', class: 'fab fa-react', type: 'fab', usage: '<i class="fab fa-react"></i>', color: '#61DAFB' },
    { name: 'Angular', class: 'fab fa-angular', type: 'fab', usage: '<i class="fab fa-angular"></i>', color: '#DD0031' },
    { name: 'Vue.js', class: 'fab fa-vuejs', type: 'fab', usage: '<i class="fab fa-vuejs"></i>', color: '#4FC08D' },
    { name: 'Python', class: 'fab fa-python', type: 'fab', usage: '<i class="fab fa-python"></i>', color: '#3776AB' },
    { name: 'Java', class: 'fab fa-java', type: 'fab', usage: '<i class="fab fa-java"></i>', color: '#007396' },
    
    // Communication et collaboration
    { name: 'Slack', class: 'fab fa-slack', type: 'fab', usage: '<i class="fab fa-slack"></i>', color: '#4A154B' },
    { name: 'Slack Hash', class: 'fab fa-slack-hash', type: 'fab', usage: '<i class="fab fa-slack-hash"></i>', color: '#4A154B' },
    { name: 'Discord', class: 'fab fa-discord', type: 'fab', usage: '<i class="fab fa-discord"></i>', color: '#5865F2' },
    { name: 'Skype', class: 'fab fa-skype', type: 'fab', usage: '<i class="fab fa-skype"></i>', color: '#00AFF0' },
    { name: 'Microsoft', class: 'fab fa-microsoft', type: 'fab', usage: '<i class="fab fa-microsoft"></i>', color: '#00A4EF' },
    { name: 'Google', class: 'fab fa-google', type: 'fab', usage: '<i class="fab fa-google"></i>', color: '#4285F4' },
    { name: 'Google Drive', class: 'fab fa-google-drive', type: 'fab', usage: '<i class="fab fa-google-drive"></i>', color: '#4285F4' },
    { name: 'Google Play', class: 'fab fa-google-play', type: 'fab', usage: '<i class="fab fa-google-play"></i>', color: '#4285F4' },
    { name: 'Dropbox', class: 'fab fa-dropbox', type: 'fab', usage: '<i class="fab fa-dropbox"></i>', color: '#0061FF' },
    { name: 'Trello', class: 'fab fa-trello', type: 'fab', usage: '<i class="fab fa-trello"></i>', color: '#0079BF' },
    { name: 'Jira', class: 'fab fa-jira', type: 'fab', usage: '<i class="fab fa-jira"></i>', color: '#0052CC' },
    { name: 'Confluence', class: 'fab fa-confluence', type: 'fab', usage: '<i class="fab fa-confluence"></i>', color: '#0052CC' },
    
    // Autres marques populaires
    { name: 'Android', class: 'fab fa-android', type: 'fab', usage: '<i class="fab fa-android"></i>', color: '#3DDC84' },
    { name: 'Windows', class: 'fab fa-windows', type: 'fab', usage: '<i class="fab fa-windows"></i>', color: '#0078D6' },
    { name: 'Linux', class: 'fab fa-linux', type: 'fab', usage: '<i class="fab fa-linux"></i>', color: '#FCC624' },
    { name: 'Ubuntu', class: 'fab fa-ubuntu', type: 'fab', usage: '<i class="fab fa-ubuntu"></i>', color: '#E95420' },
    { name: 'Chrome', class: 'fab fa-chrome', type: 'fab', usage: '<i class="fab fa-chrome"></i>', color: '#4285F4' },
    { name: 'Firefox', class: 'fab fa-firefox', type: 'fab', usage: '<i class="fab fa-firefox"></i>', color: '#FF7139' },
    { name: 'Firefox Browser', class: 'fab fa-firefox-browser', type: 'fab', usage: '<i class="fab fa-firefox-browser"></i>', color: '#FF7139' },
    { name: 'Edge', class: 'fab fa-edge', type: 'fab', usage: '<i class="fab fa-edge"></i>', color: '#0078D7' },
    { name: 'Safari', class: 'fab fa-safari', type: 'fab', usage: '<i class="fab fa-safari"></i>', color: '#000000' },
    { name: 'Opera', class: 'fab fa-opera', type: 'fab', usage: '<i class="fab fa-opera"></i>', color: '#FF1B2D' },
    { name: 'PayPal', class: 'fab fa-paypal', type: 'fab', usage: '<i class="fab fa-paypal"></i>', color: '#00457C' },
    { name: 'Stripe', class: 'fab fa-stripe', type: 'fab', usage: '<i class="fab fa-stripe"></i>', color: '#008CDD' },
    { name: 'Stripe S', class: 'fab fa-stripe-s', type: 'fab', usage: '<i class="fab fa-stripe-s"></i>', color: '#008CDD' },
    { name: 'Bitcoin', class: 'fab fa-bitcoin', type: 'fab', usage: '<i class="fab fa-bitcoin"></i>', color: '#F7931A' },
    { name: 'Ethereum', class: 'fab fa-ethereum', type: 'fab', usage: '<i class="fab fa-ethereum"></i>', color: '#3C3C3D' },
    
    // ===== ICÔNES SOLIDES (fas) =====
    // Navigation et interface
    { name: 'Home', class: 'fas fa-home', type: 'fas', usage: '<i class="fas fa-home"></i>', color: '#333333' },
    { name: 'Bars', class: 'fas fa-bars', type: 'fas', usage: '<i class="fas fa-bars"></i>', color: '#333333' },
    { name: 'Hamburger', class: 'fas fa-hamburger', type: 'fas', usage: '<i class="fas fa-hamburger"></i>', color: '#333333' },
    { name: 'Ellipsis H', class: 'fas fa-ellipsis-h', type: 'fas', usage: '<i class="fas fa-ellipsis-h"></i>', color: '#333333' },
    { name: 'Ellipsis V', class: 'fas fa-ellipsis-v', type: 'fas', usage: '<i class="fas fa-ellipsis-v"></i>', color: '#333333' },
    { name: 'Search', class: 'fas fa-search', type: 'fas', usage: '<i class="fas fa-search"></i>', color: '#333333' },
    { name: 'Search Plus', class: 'fas fa-search-plus', type: 'fas', usage: '<i class="fas fa-search-plus"></i>', color: '#333333' },
    { name: 'Search Minus', class: 'fas fa-search-minus', type: 'fas', usage: '<i class="fas fa-search-minus"></i>', color: '#333333' },
    { name: 'Filter', class: 'fas fa-filter', type: 'fas', usage: '<i class="fas fa-filter"></i>', color: '#333333' },
    { name: 'Sort', class: 'fas fa-sort', type: 'fas', usage: '<i class="fas fa-sort"></i>', color: '#333333' },
    { name: 'Sort Up', class: 'fas fa-sort-up', type: 'fas', usage: '<i class="fas fa-sort-up"></i>', color: '#333333' },
    { name: 'Sort Down', class: 'fas fa-sort-down', type: 'fas', usage: '<i class="fas fa-sort-down"></i>', color: '#333333' },
    
    // Actions et contrôles
    { name: 'User', class: 'fas fa-user', type: 'fas', usage: '<i class="fas fa-user"></i>', color: '#333333' },
    { name: 'User Circle', class: 'fas fa-user-circle', type: 'fas', usage: '<i class="fas fa-user-circle"></i>', color: '#333333' },
    { name: 'Users', class: 'fas fa-users', type: 'fas', usage: '<i class="fas fa-users"></i>', color: '#333333' },
    { name: 'User Plus', class: 'fas fa-user-plus', type: 'fas', usage: '<i class="fas fa-user-plus"></i>', color: '#333333' },
    { name: 'User Minus', class: 'fas fa-user-minus', type: 'fas', usage: '<i class="fas fa-user-minus"></i>', color: '#333333' },
    { name: 'Heart', class: 'fas fa-heart', type: 'fas', usage: '<i class="fas fa-heart"></i>', color: '#e74c3c' },
    { name: 'Star', class: 'fas fa-star', type: 'fas', usage: '<i class="fas fa-star"></i>', color: '#f39c12' },
    { name: 'Star Half', class: 'fas fa-star-half', type: 'fas', usage: '<i class="fas fa-star-half"></i>', color: '#f39c12' },
    { name: 'Check', class: 'fas fa-check', type: 'fas', usage: '<i class="fas fa-check"></i>', color: '#27ae60' },
    { name: 'Check Circle', class: 'fas fa-check-circle', type: 'fas', usage: '<i class="fas fa-check-circle"></i>', color: '#27ae60' },
    { name: 'Check Square', class: 'fas fa-check-square', type: 'fas', usage: '<i class="fas fa-check-square"></i>', color: '#27ae60' },
    { name: 'Times', class: 'fas fa-times', type: 'fas', usage: '<i class="fas fa-times"></i>', color: '#e74c3c' },
    { name: 'Times Circle', class: 'fas fa-times-circle', type: 'fas', usage: '<i class="fas fa-times-circle"></i>', color: '#e74c3c' },
    { name: 'Plus', class: 'fas fa-plus', type: 'fas', usage: '<i class="fas fa-plus"></i>', color: '#333333' },
    { name: 'Plus Circle', class: 'fas fa-plus-circle', type: 'fas', usage: '<i class="fas fa-plus-circle"></i>', color: '#333333' },
    { name: 'Plus Square', class: 'fas fa-plus-square', type: 'fas', usage: '<i class="fas fa-plus-square"></i>', color: '#333333' },
    { name: 'Minus', class: 'fas fa-minus', type: 'fas', usage: '<i class="fas fa-minus"></i>', color: '#333333' },
    { name: 'Minus Circle', class: 'fas fa-minus-circle', type: 'fas', usage: '<i class="fas fa-minus-circle"></i>', color: '#333333' },
    { name: 'Minus Square', class: 'fas fa-minus-square', type: 'fas', usage: '<i class="fas fa-minus-square"></i>', color: '#333333' },
    
    // Paramètres et outils
    { name: 'Cog', class: 'fas fa-cog', type: 'fas', usage: '<i class="fas fa-cog"></i>', color: '#333333' },
    { name: 'Cogs', class: 'fas fa-cogs', type: 'fas', usage: '<i class="fas fa-cogs"></i>', color: '#333333' },
    { name: 'Wrench', class: 'fas fa-wrench', type: 'fas', usage: '<i class="fas fa-wrench"></i>', color: '#333333' },
    { name: 'Sliders H', class: 'fas fa-sliders-h', type: 'fas', usage: '<i class="fas fa-sliders-h"></i>', color: '#333333' },
    { name: 'Tools', class: 'fas fa-tools', type: 'fas', usage: '<i class="fas fa-tools"></i>', color: '#333333' },
    
    // Communication
    { name: 'Envelope', class: 'fas fa-envelope', type: 'fas', usage: '<i class="fas fa-envelope"></i>', color: '#333333' },
    { name: 'Envelope Open', class: 'fas fa-envelope-open', type: 'fas', usage: '<i class="fas fa-envelope-open"></i>', color: '#333333' },
    { name: 'Paper Plane', class: 'fas fa-paper-plane', type: 'fas', usage: '<i class="fas fa-paper-plane"></i>', color: '#333333' },
    { name: 'Comment', class: 'fas fa-comment', type: 'fas', usage: '<i class="fas fa-comment"></i>', color: '#333333' },
    { name: 'Comments', class: 'fas fa-comments', type: 'fas', usage: '<i class="fas fa-comments"></i>', color: '#333333' },
    { name: 'Phone', class: 'fas fa-phone', type: 'fas', usage: '<i class="fas fa-phone"></i>', color: '#333333' },
    { name: 'Phone Alt', class: 'fas fa-phone-alt', type: 'fas', usage: '<i class="fas fa-phone-alt"></i>', color: '#333333' },
    { name: 'Mobile', class: 'fas fa-mobile', type: 'fas', usage: '<i class="fas fa-mobile"></i>', color: '#333333' },
    { name: 'Mobile Alt', class: 'fas fa-mobile-alt', type: 'fas', usage: '<i class="fas fa-mobile-alt"></i>', color: '#333333' },
    { name: 'Bell', class: 'fas fa-bell', type: 'fas', usage: '<i class="fas fa-bell"></i>', color: '#333333' },
    
    // Fichiers et documents
    { name: 'File', class: 'fas fa-file', type: 'fas', usage: '<i class="fas fa-file"></i>', color: '#333333' },
    { name: 'File Alt', class: 'fas fa-file-alt', type: 'fas', usage: '<i class="fas fa-file-alt"></i>', color: '#333333' },
    { name: 'File PDF', class: 'fas fa-file-pdf', type: 'fas', usage: '<i class="fas fa-file-pdf"></i>', color: '#333333' },
    { name: 'File Word', class: 'fas fa-file-word', type: 'fas', usage: '<i class="fas fa-file-word"></i>', color: '#333333' },
    { name: 'File Excel', class: 'fas fa-file-excel', type: 'fas', usage: '<i class="fas fa-file-excel"></i>', color: '#333333' },
    { name: 'File Image', class: 'fas fa-file-image', type: 'fas', usage: '<i class="fas fa-file-image"></i>', color: '#333333' },
    { name: 'File Code', class: 'fas fa-file-code', type: 'fas', usage: '<i class="fas fa-file-code"></i>', color: '#333333' },
    { name: 'Folder', class: 'fas fa-folder', type: 'fas', usage: '<i class="fas fa-folder"></i>', color: '#333333' },
    { name: 'Folder Open', class: 'fas fa-folder-open', type: 'fas', usage: '<i class="fas fa-folder-open"></i>', color: '#333333' },
    { name: 'Save', class: 'fas fa-save', type: 'fas', usage: '<i class="fas fa-save"></i>', color: '#333333' },
    
    // Actions sur les fichiers
    { name: 'Download', class: 'fas fa-download', type: 'fas', usage: '<i class="fas fa-download"></i>', color: '#333333' },
    { name: 'Upload', class: 'fas fa-upload', type: 'fas', usage: '<i class="fas fa-upload"></i>', color: '#333333' },
    { name: 'Trash', class: 'fas fa-trash', type: 'fas', usage: '<i class="fas fa-trash"></i>', color: '#e74c3c' },
    { name: 'Trash Alt', class: 'fas fa-trash-alt', type: 'fas', usage: '<i class="fas fa-trash-alt"></i>', color: '#e74c3c' },
    { name: 'Edit', class: 'fas fa-edit', type: 'fas', usage: '<i class="fas fa-edit"></i>', color: '#333333' },
    { name: 'Pen', class: 'fas fa-pen', type: 'fas', usage: '<i class="fas fa-pen"></i>', color: '#333333' },
    { name: 'Pencil Alt', class: 'fas fa-pencil-alt', type: 'fas', usage: '<i class="fas fa-pencil-alt"></i>', color: '#333333' },
    { name: 'Cut', class: 'fas fa-cut', type: 'fas', usage: '<i class="fas fa-cut"></i>', color: '#333333' },
    { name: 'Copy', class: 'fas fa-copy', type: 'fas', usage: '<i class="fas fa-copy"></i>', color: '#333333' },
    { name: 'Paste', class: 'fas fa-paste', type: 'fas', usage: '<i class="fas fa-paste"></i>', color: '#333333' },
    { name: 'Clipboard', class: 'fas fa-clipboard', type: 'fas', usage: '<i class="fas fa-clipboard"></i>', color: '#333333' },
    
    // Date et heure
    { name: 'Calendar', class: 'fas fa-calendar', type: 'fas', usage: '<i class="fas fa-calendar"></i>', color: '#333333' },
    { name: 'Calendar Alt', class: 'fas fa-calendar-alt', type: 'fas', usage: '<i class="fas fa-calendar-alt"></i>', color: '#333333' },
    { name: 'Calendar Plus', class: 'fas fa-calendar-plus', type: 'fas', usage: '<i class="fas fa-calendar-plus"></i>', color: '#333333' },
    { name: 'Calendar Minus', class: 'fas fa-calendar-minus', type: 'fas', usage: '<i class="fas fa-calendar-minus"></i>', color: '#333333' },
    { name: 'Calendar Check', class: 'fas fa-calendar-check', type: 'fas', usage: '<i class="fas fa-calendar-check"></i>', color: '#333333' },
    { name: 'Calendar Times', class: 'fas fa-calendar-times', type: 'fas', usage: '<i class="fas fa-calendar-times"></i>', color: '#333333' },
    { name: 'Clock', class: 'fas fa-clock', type: 'fas', usage: '<i class="fas fa-clock"></i>', color: '#333333' },
    { name: 'Stopwatch', class: 'fas fa-stopwatch', type: 'fas', usage: '<i class="fas fa-stopwatch"></i>', color: '#333333' },
    { name: 'Hourglass', class: 'fas fa-hourglass', type: 'fas', usage: '<i class="fas fa-hourglass"></i>', color: '#333333' },
    
    // Localisation et navigation
    { name: 'Map', class: 'fas fa-map', type: 'fas', usage: '<i class="fas fa-map"></i>', color: '#333333' },
    { name: 'Map Marker', class: 'fas fa-map-marker', type: 'fas', usage: '<i class="fas fa-map-marker"></i>', color: '#e74c3c' },
    { name: 'Map Marker Alt', class: 'fas fa-map-marker-alt', type: 'fas', usage: '<i class="fas fa-map-marker-alt"></i>', color: '#e74c3c' },
    { name: 'Map Pin', class: 'fas fa-map-pin', type: 'fas', usage: '<i class="fas fa-map-pin"></i>', color: '#e74c3c' },
    { name: 'Compass', class: 'fas fa-compass', type: 'fas', usage: '<i class="fas fa-compass"></i>', color: '#333333' },
    { name: 'Directions', class: 'fas fa-directions', type: 'fas', usage: '<i class="fas fa-directions"></i>', color: '#333333' },
    { name: 'Location Arrow', class: 'fas fa-location-arrow', type: 'fas', usage: '<i class="fas fa-location-arrow"></i>', color: '#333333' },
    
    // E-commerce
    { name: 'Shopping Cart', class: 'fas fa-shopping-cart', type: 'fas', usage: '<i class="fas fa-shopping-cart"></i>', color: '#333333' },
    { name: 'Shopping Bag', class: 'fas fa-shopping-bag', type: 'fas', usage: '<i class="fas fa-shopping-bag"></i>', color: '#333333' },
    { name: 'Shopping Basket', class: 'fas fa-shopping-basket', type: 'fas', usage: '<i class="fas fa-shopping-basket"></i>', color: '#333333' },
    { name: 'Tag', class: 'fas fa-tag', type: 'fas', usage: '<i class="fas fa-tag"></i>', color: '#333333' },
    { name: 'Tags', class: 'fas fa-tags', type: 'fas', usage: '<i class="fas fa-tags"></i>', color: '#333333' },
    { name: 'Receipt', class: 'fas fa-receipt', type: 'fas', usage: '<i class="fas fa-receipt"></i>', color: '#333333' },
    { name: 'Credit Card', class: 'fas fa-credit-card', type: 'fas', usage: '<i class="fas fa-credit-card"></i>', color: '#333333' },
    { name: 'Money Bill', class: 'fas fa-money-bill', type: 'fas', usage: '<i class="fas fa-money-bill"></i>', color: '#333333' },
    { name: 'Money Bill Wave', class: 'fas fa-money-bill-wave', type: 'fas', usage: '<i class="fas fa-money-bill-wave"></i>', color: '#333333' },
    { name: 'Dollar Sign', class: 'fas fa-dollar-sign', type: 'fas', usage: '<i class="fas fa-dollar-sign"></i>', color: '#333333' },
    { name: 'Euro Sign', class: 'fas fa-euro-sign', type: 'fas', usage: '<i class="fas fa-euro-sign"></i>', color: '#333333' },
    
    // Sécurité
    { name: 'Lock', class: 'fas fa-lock', type: 'fas', usage: '<i class="fas fa-lock"></i>', color: '#333333' },
    { name: 'Unlock', class: 'fas fa-unlock', type: 'fas', usage: '<i class="fas fa-unlock"></i>', color: '#333333' },
    { name: 'Lock Open', class: 'fas fa-lock-open', type: 'fas', usage: '<i class="fas fa-lock-open"></i>', color: '#333333' },
    { name: 'Shield Alt', class: 'fas fa-shield-alt', type: 'fas', usage: '<i class="fas fa-shield-alt"></i>', color: '#333333' },
    { name: 'User Shield', class: 'fas fa-user-shield', type: 'fas', usage: '<i class="fas fa-user-shield"></i>', color: '#333333' },
    { name: 'Fingerprint', class: 'fas fa-fingerprint', type: 'fas', usage: '<i class="fas fa-fingerprint"></i>', color: '#333333' },
    { name: 'Key', class: 'fas fa-key', type: 'fas', usage: '<i class="fas fa-key"></i>', color: '#333333' }
];

/**
 * Sélection des éléments DOM principaux
 * Ces éléments sont utilisés pour interagir avec l'interface utilisateur
 */
const iconsContainer = document.getElementById('icons-container'); // Conteneur pour afficher les icônes
const searchInput = document.getElementById('search-input');      // Champ de recherche
const searchButton = document.getElementById('search-button');    // Bouton de recherche
const filterButtons = document.querySelectorAll('.filter-btn');   // Boutons de filtrage par type d'icône

/**
 * Création dynamique de la fenêtre modale pour afficher les détails d'une icône
 * Cette modal s'affiche lorsque l'utilisateur clique sur une icône
 * Elle contient les informations détaillées et le code à copier
 */
const modal = document.createElement('div');
modal.className = 'icon-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-icon">
            <i class=""></i>
        </div>
        <div class="modal-details">
            <h3>Nom de l'icône</h3>
            <div class="code-snippet">
                <pre><code></code></pre>
                <button class="copy-btn"><i class="fas fa-copy"></i> Copier</button>
            </div>
            <div class="code-snippet">
                <h4>CSS personnalisé</h4>
                <pre><code></code></pre>
                <button class="copy-btn"><i class="fas fa-copy"></i> Copier</button>
            </div>
        </div>
    </div>
`;
document.body.appendChild(modal); // Ajout de la modal au corps du document

/**
 * Gestion des événements pour fermer la fenêtre modale
 * Deux méthodes sont implémentées pour fermer la modal:
 * 1. En cliquant sur le bouton de fermeture (X)
 * 2. En cliquant en dehors de la modal (sur le fond semi-transparent)
 */
const closeModal = modal.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Masquer la modal en cliquant sur le X
});

// Fermer la modal en cliquant en dehors du contenu
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Masquer la modal si on clique sur le fond
    }
});

/**
 * Fonction utilitaire pour copier du texte dans le presse-papier
 * Cette fonction crée temporairement un élément textarea invisible,
 * y place le texte à copier, le sélectionne, exécute la commande de copie,
 * puis supprime l'élément textarea.
 * 
 * @param {string} text - Le texte à copier dans le presse-papier
 */
function copyText(text) {
    const textarea = document.createElement('textarea'); // Création d'un textarea temporaire
    textarea.value = text;                             // Assignation du texte à copier
    document.body.appendChild(textarea);               // Ajout au DOM
    textarea.select();                                 // Sélection du texte
    document.execCommand('copy');                      // Exécution de la commande de copie
    document.body.removeChild(textarea);               // Suppression du textarea temporaire
}

/**
 * Configuration des boutons de copie dans la modal
 * Chaque bouton de copie est configuré pour:
 * 1. Copier le contenu du code associé
 * 2. Afficher un retour visuel (changement de texte et de couleur)
 * 3. Revenir à son état initial après 2 secondes
 */
const copyButtons = modal.querySelectorAll('.copy-btn');
copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Récupération du code à copier (élément précédent le bouton)
        const codeElement = this.previousElementSibling.querySelector('code');
        copyText(codeElement.textContent);
        
        // Effet visuel pour indiquer la copie réussie
        this.classList.add('copy-success');
        this.innerHTML = '<i class="fas fa-check"></i> Copié!';
        
        // Retour à l'état initial après 2 secondes
        setTimeout(() => {
            this.classList.remove('copy-success');
            this.innerHTML = '<i class="fas fa-copy"></i> Copier';
        }, 2000);
    });
});

/**
 * Fonction principale pour afficher les icônes dans la grille
 * Cette fonction prend un tableau d'icônes et les affiche dans le conteneur
 * Chaque icône est affichée dans une carte cliquable avec son nom et sa classe
 * 
 * @param {Array} icons - Tableau d'objets icônes à afficher
 */
function displayIcons(icons) {
    // Vider le conteneur avant d'ajouter de nouvelles icônes
    iconsContainer.innerHTML = '';
    
    // Afficher un message si aucune icône n'est trouvée
    if (icons.length === 0) {
        iconsContainer.innerHTML = '<div class="error-message">Aucune icône trouvée. Essayez une autre recherche.</div>';
        return;
    }
    
    // Créer une carte pour chaque icône
    icons.forEach(icon => {
        const iconCard = document.createElement('div');
        iconCard.className = 'icon-card';
        iconCard.innerHTML = `
            <i class="${icon.class}" style="color: ${icon.color};"></i>
            <div class="icon-name">${icon.name}</div>
            <div class="icon-class">${icon.class}</div>
        `;
        
        // Configurer l'événement de clic pour ouvrir la modal avec les détails de l'icône
        iconCard.addEventListener('click', () => {
            // Mettre à jour l'icône dans la modal
            const modalIcon = modal.querySelector('.modal-icon i');
            modalIcon.className = icon.class;
            modalIcon.style.color = icon.color;
            
            // Mettre à jour le titre de la modal
            const modalTitle = modal.querySelector('.modal-details h3');
            modalTitle.textContent = icon.name;
            
            // Mettre à jour les extraits de code
            const codeSnippets = modal.querySelectorAll('.code-snippet pre code');
            // Code HTML
            codeSnippets[0].textContent = icon.usage;
            // Code CSS
            codeSnippets[1].textContent = `.${icon.class.replace(' ', '.')} {
    color: ${icon.color};
    font-size: 2rem;
}`;
            
            // Afficher la modal avec notre nouvelle fonction
            showModal();
        });
        
        // Ajouter la carte au conteneur
        iconsContainer.appendChild(iconCard);
    });
}

/**
 * Fonction de recherche et filtrage des icônes
 * Cette fonction combine le filtrage par type (fab/fas) et la recherche par texte
 * Elle récupère les valeurs actuelles des filtres et du champ de recherche,
 * puis filtre les icônes en conséquence avant de les afficher
 */
function searchIcons() {
    // Récupérer le terme de recherche (en minuscules pour une recherche insensible à la casse)
    const searchTerm = searchInput.value.toLowerCase();
    // Récupérer le filtre actif (all, fab ou fas)
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    
    // Partir de la liste complète des icônes
    let filteredIcons = popularIcons;
    
    // Étape 1: Filtrer par type (fab, fas, ou tous)
    if (activeFilter !== 'all') {
        filteredIcons = filteredIcons.filter(icon => icon.type === activeFilter);
    }
    
    // Étape 2: Filtrer par terme de recherche (si un terme est saisi)
    if (searchTerm) {
        filteredIcons = filteredIcons.filter(icon => 
            // Rechercher dans le nom et la classe de l'icône
            icon.name.toLowerCase().includes(searchTerm) || 
            icon.class.toLowerCase().includes(searchTerm)
        );
    }
    
    // Afficher les icônes filtrées
    displayIcons(filteredIcons);
}

/**
 * Configuration des événements de l'interface utilisateur
 * Cette section configure tous les écouteurs d'événements nécessaires
 * pour rendre l'interface interactive
 */

// Événement de clic sur le bouton de recherche
searchButton.addEventListener('click', searchIcons);

// Événement de pression de touche dans le champ de recherche (pour la touche Entrée)
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchIcons(); // Lancer la recherche quand l'utilisateur appuie sur Entrée
    }
});

// Fermer la modal quand on clique en dehors du contenu (amélioration pour mobile)
modal.addEventListener('click', (e) => {
    // Si le clic est sur le fond de la modal (pas sur son contenu)
    if (e.target === modal) {
        hideModal();
    }
});

// Empêcher le défilement du corps de la page quand la modal est ouverte
function toggleBodyScroll(isModalOpen) {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden'; // Empêche le défilement
    } else {
        document.body.style.overflow = ''; // Rétablit le défilement
    }
}

// Mise à jour de l'affichage de la modal pour gérer le défilement et les transitions
const showModal = () => {
    // D'abord afficher la modal sans opacité
    modal.style.display = 'flex';
    // Forcer un reflow pour que la transition fonctionne
    modal.offsetHeight;
    // Ajouter la classe pour déclencher la transition d'opacité
    modal.classList.add('visible');
    toggleBodyScroll(true);
};

const hideModal = () => {
    // Retirer la classe pour déclencher la transition de disparition
    modal.classList.remove('visible');
    // Attendre la fin de la transition avant de cacher complètement
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Correspond à la durée de transition CSS (0.3s)
    toggleBodyScroll(false);
};

// Mettre à jour le gestionnaire d'événement pour le bouton de fermeture
const closeButton = modal.querySelector('.close-modal');
closeButton.addEventListener('click', hideModal);

/**
 * Configuration des boutons de filtrage
 * Chaque bouton de filtre (Toutes, Marques, Solides) est configuré pour:
 * 1. Mettre à jour l'état visuel (classe active)
 * 2. Filtrer et afficher les icônes correspondantes
 */
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        // Mettre à jour l'affichage avec le nouveau filtre
        searchIcons();
    });
});

/**
 * Support des gestes tactiles pour la modal
 * Permet de fermer la modal en glissant vers le bas (swipe down)
 */
let touchStartY = 0;
let touchEndY = 0;
const modalContent = modal.querySelector('.modal-content');

// Détecter le début du toucher
modalContent.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

// Détecter la fin du toucher et calculer la direction
modalContent.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
}, { passive: true });

// Gérer le geste de glissement
function handleSwipeGesture() {
    // Si le glissement vers le bas est suffisamment long (plus de 100px)
    if (touchEndY - touchStartY > 100) {
        hideModal(); // Fermer la modal
    }
}

/**
 * Initialisation de l'application
 * Afficher toutes les icônes au chargement initial de la page
 */
document.addEventListener('DOMContentLoaded', () => {
    // Afficher toutes les icônes sans filtre au démarrage
    displayIcons(popularIcons);
});