const paths = {
  home() {
    return "/";
  },

  discussionShow(discussionSlug: string) {
    return `/discussion/${discussionSlug}`;
  },

  postCreate(discussionSlug: string) {
    return `/discussion/${discussionSlug}/posts/new`;
  },

  postShow(discussionSlug: string, postId: string) {
    return `/discussion/${discussionSlug}/posts/${postId}`;
  },
};

export default paths;
