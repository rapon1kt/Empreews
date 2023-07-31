import { Response, Request } from "express";
import { Post } from "../../models";

export default async function getUserPosts(res: Response, req: Request) {
	try {
		// get userId from request params
		const { userId } = req.params;
		// fetch posts of user
		const userPosts = await Post.find({ userId });
		// send the userPosts to client
		res.status(200).json(userPosts);
	} catch (error: any) {
		// if user does not exist send this message as error.message
		res.status(404).json({ message: error.message });
	}
}
