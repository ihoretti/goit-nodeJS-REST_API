const {
  createNotFoundHttpError,
  createValidationError,
  createConflictError,
  createAuthError,
  createCustomError,
} = require("./errorHelpers");

const { avatarImgAdapter } = require("./avatarImgAdapter");
const { createFolderIsNotExist } = require("./createFolderIsNotExist");
const { sendMail, sendVerificationMail } = require("./mailSender");

module.exports = {
  createNotFoundHttpError,
  createValidationError,
  createConflictError,
  createAuthError,
  createCustomError,
  avatarImgAdapter,
  createFolderIsNotExist,
  sendMail,
  sendVerificationMail,
};
