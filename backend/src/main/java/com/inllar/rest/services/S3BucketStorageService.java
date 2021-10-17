package com.inllar.rest.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;

@Service
public class S3BucketStorageService {

	private Logger logger = LoggerFactory.getLogger(S3BucketStorageService.class);

	@Autowired
	private AmazonS3 amazonS3Client;

	@Value("${amazonProperties.bucketName}")
	private String bucketName;
	@Value("${amazonProperties.endpointUrl}")
	private String endpointUrl;

	/**
	 * Upload file into AWS S3
	 *
	 * @param keyName
	 * @param file
	 * @return String
	 */
	public String uploadFile(InputStream stream, String filename) {
		try {
			String fileName = generateFileName(filename);
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(stream.available());
			amazonS3Client.putObject(bucketName, fileName, stream, metadata);
			return endpointUrl + bucketName + "/" + fileName;
		} catch (IOException ioe) {
			logger.error("IOException: " + ioe.getMessage());
		} catch (AmazonServiceException serviceException) {
			logger.info("AmazonServiceException: " + serviceException.getMessage());
			throw serviceException;
		} catch (AmazonClientException clientException) {
			logger.info("AmazonClientException Message: " + clientException.getMessage());
			throw clientException;
		}
		return "File not uploaded";
	}

	private String generateFileName(String filename) {
		return new Date().getTime() + "-" + filename.replace(" ", "_");
	}

	public String deleteFileFromS3Bucket(String fileUrl) {
		String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
		amazonS3Client.deleteObject(new DeleteObjectRequest(bucketName + "/", fileName));
		return "Successfully deleted";
	}
}