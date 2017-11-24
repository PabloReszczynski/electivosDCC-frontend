import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme';
import CommentForm from '../components/CommentForm.jsx';
import Adapter from 'enzyme-adapter-react-15';
// enzyme.

describe("comment form", () => {
    const newComment = comment => undefined;

    let commentForm;
    const apimock = {
        state: undefined,
        sendComment(id, comment) {
            console.log("asdasd")
            this.state = comment;
            return {
                then: (cb) => {
                    return {ok: true};
                }
            };
        },
        readComment() {
            return this.state;
        }
    };

    beforeEach(() => {
        commentForm = shallow(<CommentForm />);
        commentForm.setState({ api: apimock });
    });

    describe("handle change", () => {
        it("Should update state", () => {
            commentForm.handleChange({
                target: {
                    value: "hello world"
                }
            });
            expect(commentForm.state.comment).to.be.not.equal("");
            expect(commentForm.state.comment).to.be.equal("hello world");
        });
    });

    describe("send", () => {
        it("should send a comment", () => {
            commentForm.setState({comment: "newComment"});
            commentForm.send();
            expect(apimock.readComment()).to.be.equal("newComment");
        });
        it("should clean state", () => {
            commentForm.send();
            expect(commentForm.state.comment).to.be.not.equal("hello world");
            expect(commentForm.state.comment).to.be.equal("");
        });
    });
});
