/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/';
  }

  if (doc.type === 'homepage') {
    return '/';
  }

  if (doc.type === 'page') {
    return '/pages/' + doc.uid;
  }

  if (doc.type === 'blog') {
    return '/our-blog';
  }

  if (doc.type === 'blog_post') {
    return '/our-blog/' + doc.uid;
  }

  if (doc.type === 'team_page') {
    return '/our-team/';
  }

  if (doc.type === 'team') {
    return '/our-team/' + doc.uid;
  }

  if (doc.type === 'members_page') {
    return '/our-members';
  }

  if (doc.type === 'member') {
    return '/our-members/' + doc.uid;
  }

  if (doc.type === 'contact_us') {
    return '/contact-us/';
  }

  return '/'
}
