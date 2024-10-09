const paths = {
  home() {
    return "/";
  },

  discussionShow(discussionSlug: string) {
    return `/discussion/${discussionSlug}`;
  },

  postCreate(discussionSlug: string) {
    return `/discussion/${discussionSlug}/post/new`;
  },

  postShow(discussionSlug: string, postId: string) {
    return `/discussion/${discussionSlug}/post/${postId}`;
  },
};

export default paths;
