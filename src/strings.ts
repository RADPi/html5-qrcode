/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 *
 * @author mebjas <minhazav@gmail.com>
 *
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {
	public static codeParseError(exception: any): string {
		return `QR code parse error, error = ${exception}`
	}

	public static errorGettingUserMedia(error: any): string {
		return `Error getting userMedia, error = ${error}`
	}

	public static onlyDeviceSupportedError(): string {
		return (
			"The device doesn't support navigator.mediaDevices , only " +
			'supported cameraIdOrConfig in this case is deviceId parameter ' +
			'(string).'
		)
	}

	public static cameraStreamingNotSupported(): string {
		return 'Camera streaming not supported by the browser.'
	}

	public static unableToQuerySupportedDevices(): string {
		return 'Unable to query supported devices, unknown error.'
	}

	public static insecureContextCameraQueryError(): string {
		return (
			'Camera access is only supported in secure context like https ' +
			'or localhost.'
		)
	}

	public static scannerPaused(): string {
		return 'Scanner paused'
	}
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {
	public static scanningStatus(): string {
		return 'Escaneando'
	}

	public static idleStatus(): string {
		return 'Inactivo'
	}

	public static errorStatus(): string {
		return 'Error'
	}

	public static permissionStatus(): string {
		return 'Permiso'
	}

	public static noCameraFoundErrorStatus(): string {
		return 'Sin cámaras'
	}

	public static lastMatch(decodedText: string): string {
		return `Última coincidencia: ${decodedText}`
	}

	public static codeScannerTitle(): string {
		return 'Escáner de códigos'
	}

	public static cameraPermissionTitle(): string {
		return 'Solicitar permisos de cámara'
	}

	public static cameraPermissionRequesting(): string {
		return 'Solicitando permisos de cámara...'
	}

	public static noCameraFound(): string {
		return 'No se encontró cámara'
	}

	public static scanButtonStopScanningText(): string {
		return 'Detener escaneo'
	}

	public static scanButtonStartScanningText(): string {
		return 'Iniciar escaneo'
	}

	public static torchOnButton(): string {
		return 'Encender linterna'
	}

	public static torchOffButton(): string {
		return 'Apagar linterna'
	}

	public static torchOnFailedMessage(): string {
		return 'No se pudo encender la linterna'
	}

	public static torchOffFailedMessage(): string {
		return 'No se pudo apagar la linterna'
	}

	public static scanButtonScanningStarting(): string {
		return 'Iniciando cámara...'
	}

	public static textIfCameraScanSelected(): string {
		return 'Escanear un archivo de imagen'
	}

	public static textIfFileScanSelected(): string {
		return 'Escanear usando la cámara directamente'
	}

	public static selectCamera(): string {
		return 'Seleccionar cámara'
	}

	public static fileSelectionChooseImage(): string {
		return 'Elegir imagen'
	}

	public static fileSelectionChooseAnother(): string {
		return 'Elegir otra'
	}

	public static fileSelectionNoImageSelected(): string {
		return 'Ninguna imagen seleccionada'
	}

	public static anonymousCameraPrefix(): string {
		return 'Cámara anónima'
	}

	public static dragAndDropMessage(): string {
		return 'O arrastra una imagen para escanear'
	}

	public static dragAndDropMessageOnlyImages(): string {
		return 'O arrastra una imagen para escanear (otros archivos no soportados)'
	}

	public static zoom(): string {
		return 'zoom'
	}

	public static loadingImage(): string {
		return 'Cargando imagen...'
	}

	public static cameraScanAltText(): string {
		return 'Escaneo con cámara'
	}

	public static fileScanAltText(): string {
		return 'Escaneo desde archivo'
	}
}

export class LibraryInfoStrings {
	public static poweredBy(): string {
		return 'Desarrollado por '
	}

	public static reportIssues(): string {
		return 'Reportar problemas'
	}
}
