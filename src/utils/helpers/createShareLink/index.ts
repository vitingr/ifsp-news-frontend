export const createShareLink = (platform: string) => {
  switch (platform) {
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=`
    case 'facebook':
      return `https://www.facebook.com/sharer.php?u=`
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=`
    case 'copy':
      return ''
    default:
      return ''
  }
}
