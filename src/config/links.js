const whatsappNumber = '553192756236'

export const links = {
  whatsapp: `https://wa.me/${whatsappNumber}`,
  youtube: 'https://www.youtube.com/@DeiseMartins.portal',
  instagram: 'https://www.instagram.com/deisemartins.portal/',
  vipGroup: 'https://chat.whatsapp.com/FR3kHLSGMfaILcm4Jy7z9m?s=cl&p=i&mlu=0',
  recalibracao: '',
  denteLeao: '',
  atendimentos: '#atendimentos',
}

export function whatsappLink(message = '') {
  return message ? `${links.whatsapp}?text=${encodeURIComponent(message)}` : links.whatsapp
}
