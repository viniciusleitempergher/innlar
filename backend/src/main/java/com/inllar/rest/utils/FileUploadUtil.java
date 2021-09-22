package com.inllar.rest.utils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.web.multipart.MultipartFile;

public class FileUploadUtil {
	public static void saveFile(String uploadDir, String fileName, MultipartFile multipartFile) throws IOException {
		Path uploadPath = Paths.get(uploadDir);

		if (multipartFile.getSize() > 14680064) {
			throw new FileUploadException();
		}

		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
		}

		try (InputStream inputStream = multipartFile.getInputStream()) {
			Path filePath = uploadPath.resolve(fileName + ".png");
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException ioe) {
			throw new IOException("Could not save image file: " + fileName, ioe);
		}
	}

	public static void removeFile(String dir, String fileName) throws IOException {
		Path uploadPath = Paths.get(dir);
		Path filePath = uploadPath.resolve(fileName + ".png");
		Files.delete(filePath);
	}
}
