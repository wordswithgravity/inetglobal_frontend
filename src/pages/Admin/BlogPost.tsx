import React from "react";
import AdminBlogManager from "../../components/Blog/AdminBlogManager";

interface BlogPostProps {
  token: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ token }) => {
  return (
    <div className="w-full space-y-6">
      {/* Blog Management CRUD Interface */}
      <AdminBlogManager token={token} />
    </div>
  );
};

export default BlogPost;
