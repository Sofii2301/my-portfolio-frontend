import "./personalInfo.css";

export default function PersonalInfo() {
  return (
    <div className="contact-info">
      <p><i className="bi bi-envelope"></i> sofia.alvarez@example.com</p>
      <p><i className="bi bi-phone"></i> +54 9 1122334455</p>
      <p><i className="bi bi-geo-alt"></i> Buenos Aires, Argentina</p>
      <a href="/assets/CV_SofiaAlvarez.pdf" download className="btn btn-primary">
        Descargar CV
      </a>
    </div>
  );
}
