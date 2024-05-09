
export const redirectToSocialMedia = (socialMedia) => {
    switch (socialMedia) {
      case 'youtube':
        window.open('https://www.youtube.com', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com', '_blank');
        break;
      default:
        break;
    }
  };
  
  